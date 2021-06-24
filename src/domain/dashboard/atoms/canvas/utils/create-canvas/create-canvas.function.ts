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

  const windowWidth = getWindowWidth();
  const windowHeight = getWindowHeight();

  return new fabric.Canvas(canvasRef.current, {
    height: windowHeight,
    renderOnAddRemove: true,
    width: windowWidth * CANVAS_WIDTH_SCALE,
  });
}
