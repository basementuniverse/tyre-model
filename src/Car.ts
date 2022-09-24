import Game from './Game';
import Input from './Input';
import Entity from './Entity';
import Wheel from './Wheel';
import { vec } from './vec';
import { clamp, wrapDirection } from './utilities';
import * as config from './config.json';

enum WheelPosition {
  FrontLeft = 0,
  FrontRight = 1,
  BackLeft = 2,
  BackRight = 3,
}

export default class Car implements Entity {
  private static readonly steeringSnap = 0.01;

  public position: vec;
  public direction: number;
  public speed: number = 0;

  public throttle: boolean = false;
  public brake: boolean = false;
  public reverse: boolean = false;
  public handbrake: boolean = false;
  public steering: number = 0;

  private wheels: Wheel[] = [];

  public constructor(
    position: vec,
    direction: number = 0
  ) {
    this.position = vec.clone(position);
    this.direction = direction;

    // Add wheels
    this.wheels[WheelPosition.FrontLeft] = new Wheel(
      this.getWheelPosition(WheelPosition.FrontLeft),
      this.direction
    );
    this.wheels[WheelPosition.FrontRight] = new Wheel(
      this.getWheelPosition(WheelPosition.FrontRight),
      this.direction
    );
    this.wheels[WheelPosition.BackLeft] = new Wheel(
      this.getWheelPosition(WheelPosition.BackLeft),
      this.direction
    );
    this.wheels[WheelPosition.BackRight] = new Wheel(
      this.getWheelPosition(WheelPosition.BackRight),
      this.direction
    );
  }

  private getWheelPosition(wheel: WheelPosition): vec {
    let offset: vec;
    switch (wheel) {
      case WheelPosition.FrontLeft:
        offset = vec(
          Game.settings.frontWheelsOffset,
          Game.settings.leftWheelsOffset
        );
        break;
      case WheelPosition.FrontRight:
        offset = vec(
          Game.settings.frontWheelsOffset,
          Game.settings.rightWheelsOffset
        );
        break;
      case WheelPosition.BackLeft:
        offset = vec(
          Game.settings.backWheelsOffset,
          Game.settings.leftWheelsOffset
        );
        break;
      case WheelPosition.BackRight:
        offset = vec(
          Game.settings.backWheelsOffset,
          Game.settings.rightWheelsOffset
        );
        break;
    }

    return vec.add(this.position, vec.rot(offset, this.direction));
  }

  public handleInput(): void {
    this.handbrake = Input.keyDown(config.controls.handbrake as any);

    // Throttle / break / reverse
    this.throttle = Input.keyDown(config.controls.throttle as any);
    this.brake = Input.keyDown(config.controls.brake as any);

    // Steering
    const steeringAmount = Game.settings.carSteeringAmount + (
      Math.abs(this.steering) * Game.settings.carSteeringCurve
    );
    if (Input.keyDown(config.controls.left as any)) {
      this.steering -= steeringAmount;
    } else if (Input.keyDown(config.controls.right as any)) {
      this.steering += steeringAmount;
    } else if (this.steering !== 0) {
      // If no steering keys are pressed, gradually reset steering
      this.steering += (this.steering < 0 ? 1 : -1) *
        Game.settings.carSteeringResetAmount;
    }

    // Clamp steering
    this.steering = clamp(this.steering, -1, 1);

    // Snap steering back to zero when it gets small enough
    if (Math.abs(this.steering) < Car.steeringSnap) {
      this.steering = 0;
    }
  }

  public update(dt: number): void {
    const drive = this.throttle ? Game.settings.carEnginePower : 0;
    const brake = this.brake ? Game.settings.carBrakePower : 0;
    let steering = wrapDirection(this.direction + (
      this.steering * Game.settings.carSteeringAngleMax
    ));

    // Update wheels
    this.wheels[WheelPosition.FrontLeft].update(
      dt,
      Game.settings.frontWheelDrive ? drive : 0,
      brake,
      steering
    );
    this.wheels[WheelPosition.FrontRight].update(
      dt,
      Game.settings.frontWheelDrive ? drive : 0,
      brake,
      steering
    );
    this.wheels[WheelPosition.BackLeft].update(
      dt,
      Game.settings.rearWheelDrive ? drive : 0,
      brake,
      this.direction
    );
    this.wheels[WheelPosition.BackRight].update(
      dt,
      Game.settings.rearWheelDrive ? drive : 0,
      brake,
      this.direction
    );

    // Find car center
    const position = vec.avg(...this.wheels.map(wheel => wheel.position));

    // Find car direction
    const frontAxle = vec.avg(
      this.wheels[WheelPosition.FrontLeft].position,
      this.wheels[WheelPosition.FrontRight].position
    );
    const rearAxle = vec.avg(
      this.wheels[WheelPosition.BackLeft].position,
      this.wheels[WheelPosition.BackRight].position
    );
    const direction = vec.rad(vec.sub(
      frontAxle,
      rearAxle
    ));

    this.speed = vec.len(vec.sub(position, this.position));
    this.position = position;
    this.direction = direction;

    // Constrain wheels
    steering = wrapDirection(this.direction + (
      this.steering * Game.settings.carSteeringAngleMax
    ));
    this.wheels[WheelPosition.FrontLeft].position = this.getWheelPosition(
      WheelPosition.FrontLeft
    );
    this.wheels[WheelPosition.FrontLeft].direction = steering;
    this.wheels[WheelPosition.FrontRight].position = this.getWheelPosition(
      WheelPosition.FrontRight
    );
    this.wheels[WheelPosition.FrontRight].direction = steering;
    this.wheels[WheelPosition.BackLeft].position = this.getWheelPosition(
      WheelPosition.BackLeft
    );
    this.wheels[WheelPosition.BackLeft].direction = this.direction;
    this.wheels[WheelPosition.BackRight].position = this.getWheelPosition(
      WheelPosition.BackRight
    );
    this.wheels[WheelPosition.BackRight].direction = this.direction;
  }

  public draw(
    context: CanvasRenderingContext2D,
    skidContext: CanvasRenderingContext2D
  ): void {
    context.save();
    context.translate(this.position.x, this.position.y);
    context.rotate(this.direction);
    context.strokeStyle = 'white';
    context.lineWidth = 1;
    context.strokeRect(
      -Game.settings.carLength / 2,
      -Game.settings.carWidth / 2,
      Game.settings.carLength,
      Game.settings.carWidth
    );
    context.restore();

    for (const wheel of this.wheels) {
      wheel.draw(context);
    }
  }
}
