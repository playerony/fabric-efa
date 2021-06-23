import { fabric } from 'fabric';

import { getRotateControl, getScaleControl } from './utils';

function setControlsVisibility(): void {
  fabric.Object.prototype.setControlsVisibility({
    tl: true, // top-left
    mt: false, // middle-top
    tr: true, // top-right
    ml: false, // middle-left
    mr: false, // middle-right
    bl: true, // bottom-left
    mb: false, // middle-bottom
    br: true, // bottom-right
    mtr: false, // rotate icon
  });
}

function setDefaultControlsAttributes(): void {
  fabric.Object.prototype.padding = 10;
  fabric.Object.prototype.hasControls = true;
  fabric.Object.prototype.borderColor = 'black';
}

function defineRotateControls(): void {
  fabric.Object.prototype.controls.tl = getRotateControl();

  fabric.Object.prototype.controls.br = getRotateControl({
    x: 0.5,
    y: 0.5,
    offsetX: 15,
    offsetY: 15,
  });
}

function defineScaleControls(): void {
  fabric.Object.prototype.controls.bl = getScaleControl({ angle: -135 });

  fabric.Object.prototype.controls.tr = getScaleControl({
    x: 0.5,
    y: -0.5,
    angle: 45,
    offsetX: 15,
    offsetY: -15,
  });
}

function configureControls(): void {
  setControlsVisibility();
  setDefaultControlsAttributes();

  defineScaleControls();
  defineRotateControls();
}

configureControls();
