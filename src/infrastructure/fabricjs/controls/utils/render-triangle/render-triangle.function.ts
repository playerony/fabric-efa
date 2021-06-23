import { fabric } from 'fabric';

export function renderTriangle(
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

  const triangle = new fabric.Triangle({
    top: 0,
    left: 0,
    width: size,
    height: size,
    stroke: 'black',
    fill: 'transparent',
  });

  ctx.rotate(this.angle);
  ctx.drawImage(triangle.toCanvasElement(), -size / 2, -size / 2, size, size);

  ctx.restore();
}
