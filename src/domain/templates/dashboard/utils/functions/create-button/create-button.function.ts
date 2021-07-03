import { Input } from './create-button.types';

export function createButton({
  id,
  width,
  height,
  canvasElementX,
  canvasElementY,
}: Input): HTMLButtonElement {
  const buttonElement = document.createElement('button');

  const originX = width / 2;
  const originY = height / 2;
  const buttonWidth = `${width}px`;
  const buttonHeight = `${height}px`;
  const positionX = `${canvasElementX - originX}px`;
  const positionY = `${canvasElementY - originY}px`;

  buttonElement.id = id;
  buttonElement.innerText = 'Change color';

  buttonElement.style.zIndex = '25';
  buttonElement.style.cursor = 'pointer';
  buttonElement.style.position = 'absolute';
  buttonElement.style.textTransform = 'uppercase';

  buttonElement.style.top = positionY;
  buttonElement.style.left = positionX;
  buttonElement.style.width = buttonWidth;
  buttonElement.style.height = buttonHeight;

  return buttonElement;
}
