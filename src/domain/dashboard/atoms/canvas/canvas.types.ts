export type SetCanvasType = (canvas: fabric.Canvas) => void;

export interface CanvasProps {
  setCanvas: SetCanvasType;
}
