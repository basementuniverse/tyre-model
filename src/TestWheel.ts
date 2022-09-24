import Game from './Game';
import Input from './Input';
import Entity from './Entity';
import { vec } from './vec';
import { clamp, lerp } from './utilities';
import * as config from './config.json';

export default class TestWheel implements Entity {
  private readonly enginePower: number = 35;
  private readonly brakePower: number = 50;
  private readonly maxSpeed: number = 200;
  private readonly drag: number = 0.01;

  public position: vec;
  public direction: number;
  public velocity: vec;

  public throttle: boolean = false;
  public brake: boolean = false;

  public constructor(
    position: vec,
    direction: number
  ) {
    this.position = vec.clone(position);
    this.direction = direction;
    this.velocity = vec();
  }

  public handleInput(): void {
    this.throttle = Input.keyDown(config.controls.throttle as any);
    this.brake = Input.keyDown(config.controls.brake as any);

    if (Input.keyDown(config.controls.left as any)) {
      this.direction -= 0.05;
    }
    if (Input.keyDown(config.controls.right as any)) {
      this.direction += 0.05;
    }
  }

  public update(dt: number): void {
    const v1 = this.sim1(dt);
    const v2 = this.sim2(dt);
    this.velocity = vec(
      lerp(v1.x, v2.x, Game.settings.temp),
      lerp(v1.y, v2.y, Game.settings.temp)
    );
    this.velocity = vec.mul(this.velocity, 1 - this.drag);
    this.position = vec.add(this.position, vec.mul(this.velocity, dt));
  }

  private sim1(dt: number): vec {
    let speed = vec.len(this.velocity);

    if (this.throttle) {
      speed += this.enginePower * dt;
    }

    if (this.brake) {
      speed -= this.brakePower * dt;
    }

    speed = clamp(speed, 0, this.maxSpeed);

    return vec.rot(vec(speed, 0), this.direction);
  }

  private sim2(dt: number): vec {
    let dv = vec();

    if (this.throttle) {
      dv = vec.rot(vec(this.enginePower * dt, 0), this.direction);
    }

    if (this.brake) {
      dv = vec.rot(vec(-this.brakePower * dt, 0), this.direction);
    }

    return vec.add(this.velocity, dv);
  }

  public draw(context: CanvasRenderingContext2D): void {
    context.save();
    context.translate(this.position.x, this.position.y);
    context.rotate(this.direction);
    context.strokeStyle = 'white';
    context.lineWidth = 1;
    context.strokeRect(-15, -5, 30, 10);
    context.restore();
  }
}
