import Game from './Game';
import Entity from './Entity';
import { WheelStats } from './HasWheels';
import SkidCanvas from './SkidCanvas';
import { vec } from './vec';
import {
  clamp,
  linearTransform,
  smoothPartial,
  smoothstep,
} from './utilities';

export default class Wheel implements Entity {
  public position: vec;
  public direction: number;
  public velocity: vec = vec();
  public speed: number = 0;

  public slipCoefficient: number = 0;
  public speedCoefficient: number = 0;

  public constructor(
    position: vec,
    direction: number = 0
  ) {
    this.position = vec.clone(position);
    this.direction = direction;
  }

  public get slipAmount(): number {
    return this.slipCoefficient * this.speedCoefficient;
  }

  public get stats(): WheelStats {
    return {
      slip: this.slipCoefficient,
      speed: this.speedCoefficient,
    };
  }

  public update(
    dt: number,
    drive: number,
    handbrake: boolean,
    direction: number
  ): void {
    this.direction = direction;

    // Calculate delta-v (this is where the wheel *wants* to go)
    const dv = vec.rot(vec(drive * dt, 0), this.direction);

    // Calculate the speed coefficient (the magnitude of the tyre's velocity
    // normalised to the max speed of the car)
    this.speedCoefficient = clamp(this.speed / Game.settings.carMaxSpeed);
    const speedComponent = clamp(linearTransform(
      this.speedCoefficient,
      Game.settings.tyreSpeedCoefficient,
      Game.settings.tyreSpeedOffset
    ));

    // Calculate the amount of slip (the difference between the direction the tyre is
    // facing, and the direction the tyre is actually travelling)
    if (vec.eq(this.velocity, vec())) {
      this.slipCoefficient = 0;
    } else {
      this.slipCoefficient = clamp(1 - Math.abs(vec.dot(
        vec.rot(vec.ux(), this.direction),
        vec.nor(this.velocity)
      )));
    }
    const slipComponent = clamp(linearTransform(
      this.slipCoefficient,
      Game.settings.tyreSlipCoefficient,
      Game.settings.tyreSlipOffset
    ));

    // Calculate lateral drag (the amount of drag at a normal to the tyre's direction)
    const i = Game.settings.useSlipCurve
      ? smoothPartial(
        1 - clamp(slipComponent * speedComponent),
        Game.settings.slipCurveControlPoints
      )
      : 1 - clamp(slipComponent * speedComponent);
    const lateralDrag = smoothstep(
      Game.settings.tyreLateralDragMin,
      Game.settings.tyreLateralDragMax,
      i
    );

    // Calculate longitudinal drag (the amount of draw in the direction of the tyre)
    // When the tyre is rolling, this is a really small number representing air resistance,
    // rolling friction etc.
    // When the handbrake is applied, this should be the same as lateral drag
    const longitudinalDrag = handbrake ? lateralDrag : Game.settings.tyreLongitudinalDrag;

    // Calculate a velocity vector pointing in the tyre's direction so we can apply
    // longitudinal and lateral drag
    const rv = vec.rot(vec.add(this.velocity, dv), -this.direction);
    rv.x *= 1 - longitudinalDrag;
    rv.y *= 1 - lateralDrag;
    this.velocity = vec.rot(rv, this.direction);
    this.speed = vec.len(this.velocity);

    // If velocity gets small enough, stop to prevent any floating-point instability
    if (this.speed < 1) {
      this.velocity = vec();
    }

    // Euler integration
    this.position = vec.add(this.position, vec.mul(this.velocity, dt));
  }

  public draw(context: CanvasRenderingContext2D, skidCanvas: SkidCanvas): void {
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

    // Draw skid-mark
    if (this.slipCoefficient > 0) {
      skidCanvas.skid(
        this.position,
        this.direction,
        vec(
          Game.settings.wheelLength,
          Game.settings.wheelWidth
        ),
        this.slipAmount
      );
    }
  }
}
