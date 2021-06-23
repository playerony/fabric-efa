export function createButton(id: string): HTMLButtonElement {
  const buttonElement = document.createElement('button');

  buttonElement.id = id;
  buttonElement.innerText = 'Change color';

  buttonElement.style.zIndex = '2000';
  buttonElement.style.position = 'absolute';

  return buttonElement;
}
