import Game from './Game';
import Input from './Input';
import SkidCanvas from './SkidCanvas';
import Entity from './Entity';
import HasWheels, { WheelStats } from './HasWheels';
import Wheel from './Wheel';
import { vec } from './vec';
import * as config from './config.json';

export default class TestWheel implements Entity, HasWheels {
  public direction: number;
  public speed: number = 0;

  public throttle: boolean = false;
  public brake: boolean = false;
  public reverse: boolean = false;
  public handbrake: boolean = false;

  private wheel: Wheel;

  public constructor(
    position: vec,
    direction: number
  ) {
    this.direction = direction;

    // Add test wheel
    this.wheel = new Wheel(
      vec.clone(position),
      direction
    );
  }

  public get position(): vec {
    return this.wheel.position;
  }

  public getWheelStats(): WheelStats[] {
    return [this.wheel.stats];
  }

  public handleInput(): void {
    // Throttle / brake / handbrake
    this.throttle = Input.keyDown(config.controls.throttle as any);
    this.brake = Input.keyDown(config.controls.brake as any);
    this.handbrake = Input.keyDown(config.controls.handbrake as any);

    // Steering
    if (Input.keyDown(config.controls.left as any)) {
      this.direction -= Game.settings.carSteeringAmount;
    }
    if (Input.keyDown(config.controls.right as any)) {
      this.direction += Game.settings.carSteeringAmount;
    }
  }

  public update(dt: number): void {
    const drive = this.throttle ? Game.settings.carEnginePower : 0;
    const brake = this.brake ? Game.settings.carBrakePower : 0;

    this.wheel.update(dt, drive, brake, this.handbrake, this.direction);
  }

  public draw(context: CanvasRenderingContext2D, skidCanvas: SkidCanvas): void {
    this.wheel.draw(context, skidCanvas);
  }
}
