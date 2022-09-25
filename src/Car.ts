import Game from './Game';
import Debug from './Debug';
import Input from './Input';
import SkidCanvas from './SkidCanvas';
import Entity from './Entity';
import HasWheels, { WheelStats } from './HasWheels';
import Wheel from './Wheel';
import { vec } from './vec';
import { clamp, round, wrapDirection } from './utilities';
import * as config from './config.json';

enum WheelPosition {
  FrontLeft = 0,
  FrontRight = 1,
  BackLeft = 2,
  BackRight = 3,
}

export default class Car implements Entity, HasWheels {
  public position: vec;
  public direction: number;
  public speed: number = 0;

  public throttle: boolean = false;
  public brake: boolean = false;
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

  public getWheelStats(): WheelStats[] {
    return this.wheels.map(wheel => wheel.stats);
  }

  public handleInput(): void {
    // Throttle / brake / handbrake
    this.throttle = Input.keyDown(config.controls.throttle as any);
    this.brake = Input.keyDown(config.controls.brake as any);
    this.handbrake = Input.keyDown(config.controls.handbrake as any);

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

      // Snap steering back to zero when it gets small enough
      if (Math.abs(this.steering) <= Game.settings.carSteeringResetAmount) {
        this.steering = 0;
      }
    }

    // Clamp steering
    this.steering = clamp(this.steering, -1, 1);
  }

  public update(dt: number): void {
    const drive = this.throttle ? Game.settings.carEnginePower : 0;
    const brake = this.brake ? Game.settings.carBrakePower : 0;
    let steering = wrapDirection(this.direction + (
      this.steering * Game.settings.carSteeringAngleMax
    ));

    // Calculate drive amount for each pair of wheels (front and rear)
    const frontWheelsDrive = (Game.settings.frontWheelDrive
      ? drive
      : drive * Game.settings.tyreNoDriveAttenuation) - brake;
    const rearWheelsDrive = (Game.settings.rearWheelDrive
      ? drive
      : drive * Game.settings.tyreNoDriveAttenuation) - brake;

    // Update wheels
    this.wheels[WheelPosition.FrontLeft].update(
      dt,
      frontWheelsDrive,
      this.handbrake,
      steering
    );
    this.wheels[WheelPosition.FrontRight].update(
      dt,
      frontWheelsDrive,
      this.handbrake,
      steering
    );
    this.wheels[WheelPosition.BackLeft].update(
      dt,
      rearWheelsDrive,
      this.handbrake,
      this.direction
    );
    this.wheels[WheelPosition.BackRight].update(
      dt,
      rearWheelsDrive,
      this.handbrake,
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

    // Debug output
    Debug.value('position', vec.str(vec.map(this.position, n => round(n, 2))));
    Debug.value('direction', round(this.direction, 2));
    Debug.value('speed', round(this.speed, 2));
    Debug.value('steering', round(this.steering, 2));
    Debug.value(
      'throttle',
      'throttle',
      {
        showLabel: false,
        foregroundColour: this.throttle ? 'white' : 'rgba(255, 255, 255, 0.2)',
      }
    );
    Debug.value(
      'brake',
      'brake',
      {
        showLabel: false,
        foregroundColour: this.brake ? 'white' : 'rgba(255, 255, 255, 0.2)',
      }
    );
    // Debug.value(
    //   'reverse',
    //   'reverse',
    //   {
    //     showLabel: false,
    //     foregroundColour: this.reverse ? 'white' : 'rgba(255, 255, 255, 0.2)',
    //   }
    // );
    Debug.value(
      'handbrake',
      'handbrake',
      {
        showLabel: false,
        foregroundColour: this.handbrake ? 'white' : 'rgba(255, 255, 255, 0.2)',
      }
    );

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

  public draw(context: CanvasRenderingContext2D, skidCanvas: SkidCanvas): void {
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
      wheel.draw(context, skidCanvas);
    }
  }
}
