import { Input } from './set-button-position.types';

export const setButtonPosition =
  ({ canvasButtonsContainer, buttonHeight, buttonWidth }: Input) =>
  (e: any) => {
    if (!canvasButtonsContainer || !e.target) {
      return;
    }

    const { id, top, left, scaleX, scaleY, _objects: objects } = e.target;

    if (!objects) {
      const foundButton = document.getElementById(id);

      if (foundButton) {
        foundButton.style.top = `${top - buttonHeight / 2}px`;
        foundButton.style.left = `${left - buttonWidth / 2}px`;
      }
    } else {
      objects.forEach((_target: any) => {
        const targetId = _target.id;
        const foundButton = document.getElementById(targetId);

        if (foundButton) {
          foundButton.style.top = `${top + _target.top * scaleY - buttonHeight / 2}px`;
          foundButton.style.left = `${left + _target.left * scaleX - buttonWidth / 2}px`;
        }
      });
    }
  };
