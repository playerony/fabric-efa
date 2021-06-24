import { Input } from './set-button-position.types';

import { degreesToRadians } from '@utils';

function setButtonPositionForSelectedObject(
  { id, angle }: any,
  centerX: number,
  centerY: number,
): void {
  const foundButton = document.getElementById(id);

  if (foundButton) {
    foundButton.style.top = `${centerY}px`;
    foundButton.style.left = `${centerX}px`;
    foundButton.style.transform = `rotateZ(${angle}deg)`;
  }
}

function setButtonsPositionsForMultipleSelectedObjects(
  { angle, scaleX, scaleY, _objects: objects }: any,
  centerX: number,
  centerY: number,
): void {
  const radius = degreesToRadians(angle);

  objects.forEach((_object: any) => {
    const objectId = _object.id;
    const foundButton = document.getElementById(objectId);

    const objectAngle = _object.angle + angle;
    const scaledPositionY = _object.top * scaleY;
    const scaledPositionX = _object.left * scaleX;

    const newPositionY =
      scaledPositionY * Math.cos(radius) + scaledPositionX * Math.sin(radius) + centerY;

    const newPositionX =
      scaledPositionX * Math.cos(radius) - scaledPositionY * Math.sin(radius) + centerX;

    if (foundButton) {
      foundButton.style.top = `${newPositionY}px`;
      foundButton.style.left = `${newPositionX}px`;
      foundButton.style.transform = `rotateZ(${objectAngle}deg)`;
    }
  });
}

export const setButtonPosition =
  ({ canvasButtonsContainer, buttonHeight, buttonWidth }: Input) =>
  ({ target }: any) => {
    if (!canvasButtonsContainer || !target) {
      return;
    }

    const { top, left, _objects: objects } = target;

    const centerX = left - buttonWidth / 2;
    const centerY = top - buttonHeight / 2;

    if (!objects) {
      setButtonPositionForSelectedObject(target, centerX, centerY);
    } else {
      setButtonsPositionsForMultipleSelectedObjects(target, centerX, centerY);
    }
  };
