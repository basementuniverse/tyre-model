import Game from './Game';
import Entity from './Entity';
import HasWheels from './HasWheels';
import {
  clamp,
  lerpArray,
  linearTransform,
  smoothPartial,
  smoothstep,
} from './utilities';
import { vec } from './vec';

export default class Graph implements Entity {
  private readonly size: vec = vec(200, 200);
  private readonly margin: number = 20;
  private readonly colours: [number, number, number][] = [
    [0, 0, 255],
    [0, 255, 255],
    [255, 255, 0],
    [255, 0, 0],
  ];
  private readonly labelFont: 'bold 14px sans-serif';
  private readonly labelColour: string = 'white';
  private readonly slipCurveColour: string = 'black';

  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  public constructor() {
    this.canvas = document.createElement('canvas');
    this.canvas.width = this.size.x;
    this.canvas.height = this.size.y;
    const context = this.canvas.getContext('2d');
    if (context !== null) {
      this.context = context;
    } else {
      throw new Error("Couldn't get a 2d context for the slip curve graph.");
    }
  }

  public update(dt: number): void {
    this.context.save();

    // Slip transforms
    for (let x = 0; x <= this.size.x; x++) {
      for (let y = 0; y <= this.size.y; y++) {
        const slip = clamp(linearTransform(
          x / this.size.x,
          Game.settings.tyreSlipCoefficient,
          Game.settings.tyreSlipOffset
        ));
        const speed = clamp(linearTransform(
          y / this.size.y,
          Game.settings.tyreSpeedCoefficient,
          Game.settings.tyreSpeedOffset
        ));
        const inverseDrag = clamp(slip * speed);

        const r = Math.floor(lerpArray(this.colours.map(c => c[0]), inverseDrag, smoothstep));
        const g = Math.floor(lerpArray(this.colours.map(c => c[1]), inverseDrag, smoothstep));
        const b = Math.floor(lerpArray(this.colours.map(c => c[2]), inverseDrag, smoothstep));

        this.context.fillStyle = `rgb(${r}, ${g}, ${b})`;
        this.context.fillRect(x, this.size.y - y, 1, 1);
      }
    }

    // Slip curve
    if (Game.settings.useSlipCurve) {
      this.context.fillStyle = this.slipCurveColour;
      for (let x = 0; x <= this.size.x; x++) {
        const y = smoothPartial(x / this.size.x, Game.settings.slipCurveControlPoints);
        this.context.fillRect(x, this.size.y - (y * this.size.y), 2, 2);
      }
    }
    this.context.restore();
  }

  public draw(context: CanvasRenderingContext2D, car: HasWheels): void {
    context.save();
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.translate(
      this.margin,
      Game.screen.y - this.size.y - this.margin
    );

    // Draw slip map
    context.drawImage(
      this.canvas,
      0, 0
    );

    // Draw labels
    context.font = this.labelFont;
    context.fillStyle = this.labelColour;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(
      'slip',
      this.size.x / 2,
      this.size.y + this.margin / 2
    );
    context.save();
    context.rotate(-Math.PI / 2);
    context.fillText(
      'speed',
      -this.size.x / 2,
      -this.margin / 2
    );
    context.restore();

    // Draw wheel stats
    const wheelStats = car.getWheelStats();
    for (const wheel of wheelStats) {
      this.drawCross(
        context,
        vec(wheel.slip * this.size.x, (1 - wheel.speed) * this.size.y),
      );
    }
    context.restore();
  }

  private drawCross(
    context: CanvasRenderingContext2D,
    position: vec,
    colour: string = 'white',
    size: number = 6
  ): void {
    context.save();
    context.strokeStyle = colour;
    context.lineWidth = 2;
    context.beginPath();
    const halfSize = size / 2;
    context.moveTo(position.x - halfSize, position.y - halfSize);
    context.lineTo(position.x + halfSize, position.y + halfSize);
    context.moveTo(position.x - halfSize, position.y + halfSize);
    context.lineTo(position.x + halfSize, position.y - halfSize);
    context.stroke();
    context.restore();
  }
}
