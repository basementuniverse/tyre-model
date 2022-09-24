import Game from './Game';
import { vec } from './vec';

export type CameraBounds = {
  top: number;
  bottom: number;
  left: number;
  right: number
};

export default class Camera {
  private readonly easeAmount: number = 0.9;

  public position: vec;
  private actualPosition: vec;

  public constructor(position: vec) {
    this.position = vec.clone(position);
    this.actualPosition = vec.clone(position);
  }

  public get bounds(): CameraBounds {
    return {
      top: this.actualPosition.y - (Game.screen.y / 2),
      bottom: this.actualPosition.y + (Game.screen.y / 2),
      left: this.actualPosition.x - (Game.screen.x / 2),
      right: this.actualPosition.x + (Game.screen.x / 2)
    };
  }

  public draw(context: CanvasRenderingContext2D): void {
    const delta = vec.sub(this.actualPosition, this.position);
    this.actualPosition = vec.add(this.position, vec.mul(delta, this.easeAmount));
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.translate(
      (Game.screen.x / 2) - this.actualPosition.x,
      (Game.screen.y / 2) - this.actualPosition.y
    );
  }
}
