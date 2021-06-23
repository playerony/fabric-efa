import { fabric } from 'fabric';
import { MutableRefObject } from 'react';

import { CANVAS_WIDTH_SCALE } from '@infrastructure';
import { getWindowWidth, getWindowHeight } from '@utils';

export function createCanvas(
  canvasRef: MutableRefObject<HTMLCanvasElement | null>,
): fabric.Canvas | null {
  if (!canvasRef?.current) {
    return null;
  }

  const width = getWindowWidth();
  const height = getWindowHeight();

  return new fabric.Canvas(canvasRef.current, {
    height,
    renderOnAddRemove: true,
    width: width * CANVAS_WIDTH_SCALE,
  });
}
