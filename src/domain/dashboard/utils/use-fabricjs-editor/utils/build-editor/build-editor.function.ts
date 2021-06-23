import { fabric } from 'fabric';

import { EditorOptions } from '../../../../types';
import { CIRCLE, RECTANGLE, TRIANGLE } from './build-editor.defaults';

fabric.Object.prototype.originX = 'center';
fabric.Object.prototype.originY = 'center';

export function buildEditor(canvas: fabric.Canvas | null): EditorOptions | null {
  if (!canvas) {
    return null;
  }

  const canvasWidth = canvas.width || 0;
  const canvasHeight = canvas.height || 0;

  return {
    addCircle: () => {
      const object = new fabric.Circle({
        ...CIRCLE,
        top: canvasHeight / 2,
        left: canvasWidth / 2,
      });

      canvas.add(object);
    },
    addRectangle: () => {
      const object = new fabric.Rect({
        ...RECTANGLE,
        top: canvasHeight / 2,
        left: canvasWidth / 2,
      });

      canvas.add(object);
    },
    addTriangle: () => {
      const object = new fabric.Triangle({
        ...TRIANGLE,
        top: canvasHeight / 2,
        left: canvasWidth / 2,
      });

      canvas.add(object);
    },
    deleteAll: () => {
      canvas.getObjects().forEach((object) => canvas.remove(object));
      canvas.discardActiveObject();
      canvas.renderAll();
    },
    deleteSelected: () => {
      canvas.getActiveObjects().forEach((object) => canvas.remove(object));
      canvas.discardActiveObject();
      canvas.renderAll();
    },
  };
}
