import { yellow, neutral } from '@infrastructure';

export const DEFAULT_SIZE = 300;
export const DEFAULT_FILL_COLOR = yellow[100];
export const DEFAULT_STROKE_COLOR = neutral[600];

const defaultShapeProps = {
  top: DEFAULT_SIZE,
  left: DEFAULT_SIZE,
  fill: DEFAULT_FILL_COLOR,
  stroke: DEFAULT_STROKE_COLOR,
};

export const CIRCLE = {
  ...defaultShapeProps,
  radius: DEFAULT_SIZE / 2,
};

export const RECTANGLE = {
  ...defaultShapeProps,
  width: DEFAULT_SIZE,
  height: DEFAULT_SIZE,
};

export const TRIANGLE = {
  ...defaultShapeProps,
  width: DEFAULT_SIZE,
  height: DEFAULT_SIZE,
};
