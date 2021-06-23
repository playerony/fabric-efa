import { Input } from './set-button-position.types';

import { degreesToRadians } from '@utils';

export const setButtonPosition =
  ({ canvasButtonsContainer, buttonHeight, buttonWidth }: Input) =>
  (e: any) => {
    if (!canvasButtonsContainer || !e.target) {
      return;
    }

    const { id, top, left, angle, scaleX, scaleY, _objects: objects } = e.target;

    const radius = degreesToRadians(angle);
    const centerX = left - buttonWidth / 2;
    const centerY = top - buttonHeight / 2;

    if (!objects) {
      const foundButton = document.getElementById(id);

      if (foundButton) {
        foundButton.style.top = `${centerY}px`;
        foundButton.style.left = `${centerX}px`;
      }
    } else {
      objects.forEach((_target: any) => {
        const targetId = _target.id;
        const foundButton = document.getElementById(targetId);

        const y = _target.top * scaleY;
        const x = _target.left * scaleX;

        const newY = y * Math.cos(radius) + x * Math.sin(radius) + centerY;
        const newX = x * Math.cos(radius) - y * Math.sin(radius) + centerX;

        if (foundButton) {
          foundButton.style.top = `${newY}px`;
          foundButton.style.left = `${newX}px`;
        }
      });
    }
  };
