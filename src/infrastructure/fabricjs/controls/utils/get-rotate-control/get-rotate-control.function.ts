import { fabric } from 'fabric';

import { renderCircle } from '..';

const { controlsUtils } = fabric as any;

export const getRotateControl = (options?: Partial<fabric.Control>): fabric.Control =>
  new fabric.Control({
    x: -0.5,
    y: -0.5,
    sizeX: 20,
    sizeY: 20,
    offsetX: -15,
    offsetY: -15,
    render: renderCircle,
    actionName: 'rotate',
    actionHandler: controlsUtils.rotationWithSnapping,
    cursorStyleHandler: controlsUtils.rotationStyleHandler,
    ...options,
  });
