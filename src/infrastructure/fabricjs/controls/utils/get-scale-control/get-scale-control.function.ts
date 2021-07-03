import { fabric } from 'fabric';

import { degreesToRadians } from '@utils';
import { renderTriangle } from '..';

const { controlsUtils } = fabric as any;

export const getScaleControl = (options: Partial<fabric.Control> = {}): fabric.Control => {
  const { angle = 0, ...restOptions } = options;

  const radians = degreesToRadians(angle) || 0;

  return new fabric.Control({
    y: 0.5,
    x: -0.5,
    sizeX: 20,
    sizeY: 20,
    offsetY: 15,
    offsetX: -15,
    angle: radians,
    actionName: 'scale',
    render: renderTriangle,
    actionHandler: controlsUtils.scalingEqually,
    cursorStyleHandler: controlsUtils.scaleCursorStyleHandler,
    ...restOptions,
  });
};
