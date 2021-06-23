import { uuid } from 'uuidv4';
import { fabric } from 'fabric';

import { EditorOptions } from '../../../../../types';
import { CIRCLE, RECTANGLE, TRIANGLE } from './build-editor.defaults';

import { getRandomColor } from '@utils';

const generateUniqueId = (prefix: string): string => `${prefix}_${uuid()}`;

export function buildEditor(canvas: fabric.Canvas | null): EditorOptions | null {
  if (!canvas) {
    return null;
  }

  const canvasWidth = canvas.width || 0;
  const canvasHeight = canvas.height || 0;

  return {
    addCircle: () => {
      const fill = getRandomColor();
      const id = generateUniqueId('circle');

      const object = new fabric.Circle({
        ...CIRCLE,
        id,
        fill,
        top: canvasHeight / 2,
        left: canvasWidth / 2,
      } as any);

      canvas.add(object);
    },
    addRectangle: () => {
      const fill = getRandomColor();
      const id = generateUniqueId('rectangle');

      const object = new fabric.Rect({
        ...RECTANGLE,
        id,
        fill,
        top: canvasHeight / 2,
        left: canvasWidth / 2,
      } as any);

      canvas.add(object);
    },
    addTriangle: () => {
      const fill = getRandomColor();
      const id = generateUniqueId('triangle');

      const object = new fabric.Triangle({
        ...TRIANGLE,
        id,
        fill,
        top: canvasHeight / 2,
        left: canvasWidth / 2,
      } as any);

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
