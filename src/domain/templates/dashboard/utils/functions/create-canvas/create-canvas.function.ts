import { fabric } from 'fabric';
import { MutableRefObject } from 'react';

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
    width: windowWidth,
    height: windowHeight,
    renderOnAddRemove: true,
  });
}
