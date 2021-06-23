import { fabric } from 'fabric';

export function renderCircle(
  this: any,
  ctx: CanvasRenderingContext2D,
  left: number,
  top: number,
  styleOverride: any,
  fabricObject: Object,
) {
  const size = this.sizeX;

  ctx.save();
  ctx.translate(left, top);

  // @ts-ignore
  ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));

  ctx.strokeStyle = 'black';
  ctx.beginPath();
  ctx.arc(0, 0, size / 2, 0, 2 * Math.PI);
  ctx.closePath();

  ctx.stroke();
  ctx.restore();
}
