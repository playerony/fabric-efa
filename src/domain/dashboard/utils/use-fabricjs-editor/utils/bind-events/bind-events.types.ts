import { fabric } from 'fabric';

export type SetSelectedObject = (selectedObjects: fabric.Object[]) => void;

export interface BindEventsInput {
  canvas: fabric.Canvas | null;
  setSelectedObject: SetSelectedObject;
}
