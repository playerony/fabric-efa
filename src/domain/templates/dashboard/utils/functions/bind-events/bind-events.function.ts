import { fabric } from 'fabric';

import { getRandomColor } from '@utils';
import { CANVAS_BUTTONS_CONTAINER_ID } from '@infrastructure';

import { createButton, setButtonPosition } from '..';

const BUTTON_WIDTH = 130;
const BUTTON_HEIGHT = 30;

export function bindEvents(canvas: fabric.Canvas): void {
  const canvasButtonsContainer = document.getElementById(CANVAS_BUTTONS_CONTAINER_ID);

  canvas.on('object:added', ({ target }: any) => {
    if (!canvasButtonsContainer || !target) {
      return;
    }

    const { id, top, left } = target;

    const buttonElement = createButton({
      id,
      canvasElementY: top,
      width: BUTTON_WIDTH,
      canvasElementX: left,
      height: BUTTON_HEIGHT,
    });

    buttonElement.addEventListener('click', () => {
      target.set({ fill: getRandomColor() });

      canvas.renderAll();
    });

    canvasButtonsContainer.appendChild(buttonElement);
  });

  canvas.on('object:removed', ({ target }: any) => {
    if (!canvasButtonsContainer || !target) {
      return;
    }

    const foundButton = document.getElementById(target.id);

    if (foundButton) {
      foundButton.remove();
    }
  });

  canvas.on(
    'object:moving',
    setButtonPosition({
      canvasButtonsContainer,
      buttonWidth: BUTTON_WIDTH,
      buttonHeight: BUTTON_HEIGHT,
    }),
  );

  canvas.on(
    'object:scaling',
    setButtonPosition({
      canvasButtonsContainer,
      buttonWidth: BUTTON_WIDTH,
      buttonHeight: BUTTON_HEIGHT,
    }),
  );

  canvas.on(
    'object:rotating',
    setButtonPosition({
      canvasButtonsContainer,
      buttonWidth: BUTTON_WIDTH,
      buttonHeight: BUTTON_HEIGHT,
    }),
  );
}
