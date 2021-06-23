import { fabric } from 'fabric';

import { getRandomColor } from '@utils';
import { CANVAS_BUTTONS_CONTAINER_ID } from '@infrastructure';

import { createButton, setButtonPosition } from '..';

export function bindEvents(canvas: fabric.Canvas) {
  const buttonWidth = 102;
  const buttonHeight = 20;
  const canvasButtonsContainer = document.getElementById(CANVAS_BUTTONS_CONTAINER_ID);

  canvas.on('object:added', (e: any) => {
    if (!canvasButtonsContainer || !e.target) {
      return;
    }

    const { id, top, left } = e.target;

    const buttonElement = createButton(id);

    buttonElement.style.top = `${top - buttonHeight / 2}px`;
    buttonElement.style.left = `${left - buttonWidth / 2}px`;

    buttonElement.addEventListener('click', () => {
      e.target.set({ fill: getRandomColor() });

      canvas.renderAll();
    });

    canvasButtonsContainer.appendChild(buttonElement);
  });

  canvas.on('object:removed', (e: any) => {
    if (!canvasButtonsContainer || !e.target) {
      return;
    }

    const { id } = e.target;

    const foundButton = document.getElementById(id);

    if (foundButton) {
      foundButton.remove();
    }
  });

  canvas.on(
    'object:moving',
    setButtonPosition({ canvasButtonsContainer, buttonWidth, buttonHeight }),
  );

  canvas.on(
    'object:scaling',
    setButtonPosition({ canvasButtonsContainer, buttonWidth, buttonHeight }),
  );
}
