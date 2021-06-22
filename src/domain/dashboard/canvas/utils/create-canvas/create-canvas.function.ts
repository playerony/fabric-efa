import { fabric } from 'fabric';
import { MutableRefObject } from 'react';

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
    width,
    height,
    renderOnAddRemove: true,
  });
}
