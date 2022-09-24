import Game from './Game';
import Entity from './Entity';
import { vec } from './vec';
import { clamp, lerp, linearTransform } from './utilities';

export default class Wheel implements Entity {
  public position: vec;
  public direction: number;
  public velocity: vec = vec();
  public speed: number = 0;
  public slip: number = 0;

  public constructor(
    position: vec,
    direction: number = 0
  ) {
    this.position = vec.clone(position);
    this.direction = direction;
  }

  public update(
    dt: number,
    drive: number,
    brake: number,
    direction: number
  ): void {
    this.direction = direction;

    const v = vec.rot(this.velocity, -this.direction);
    v.x *= 1 - Game.settings.tyreLongitudinalDrag;
    v.y *= 1 - Game.settings.tyreLateralDrag;
    this.velocity = vec.rot(v, this.direction);

    const slip = 1 - vec.dot(
      vec.rot(vec.ux(), this.direction),
      vec.nor(this.velocity)
    );
    this.slip = clamp(
      linearTransform(
        slip,
        Game.settings.tyreSlipCoefficient,
        Game.settings.tyreSlipOffset
      ) +
      linearTransform(
        this.speed / Game.settings.carMaxSpeed,
        Game.settings.tyreSpeedCoefficient,
        Game.settings.tyreSpeedOffset
      )
    );

    const v1 = this.sim1(dt, drive, brake);
    const v2 = this.sim2(dt, drive, brake);
    this.velocity = vec(
      lerp(v1.x, v2.x, this.slip),
      lerp(v1.y, v2.y, this.slip)
    );
    this.speed = vec.len(this.velocity);
    this.position = vec.add(this.position, vec.mul(this.velocity, dt));
  }

  private sim1(
    dt: number,
    drive: number,
    brake: number
  ): vec {
    return vec.rot(
      vec(vec.len(this.velocity) + (drive - brake) * dt, 0),
      this.direction
    );
  }

  private sim2(
    dt: number,
    drive: number,
    brake: number
  ): vec {
    return vec.add(
      this.velocity,
      vec.rot(vec((drive - brake) * dt, 0), this.direction)
    );
  }

  public draw(context: CanvasRenderingContext2D): void {
    context.save();
    context.translate(this.position.x, this.position.y);
    context.rotate(this.direction);
    context.strokeStyle = 'white';
    context.lineWidth = 1;
    context.strokeRect(
      -Game.settings.wheelLength / 2,
      -Game.settings.wheelWidth / 2,
      Game.settings.wheelLength,
      Game.settings.wheelWidth
    );
    context.restore();
  }
}
