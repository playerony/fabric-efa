import { useRef, useEffect } from 'react';

import { createCanvas } from './utils';
import { CanvasProps } from './canvas.types';

export function Canvas({ children, setCanvas }: CanvasProps): JSX.Element {
  const canvasRef = useRef(null);

  useEffect(() => {
    const createdCanvas = createCanvas(canvasRef);

    if (createdCanvas !== null) {
      setCanvas(createdCanvas);
    }
  }, [setCanvas]);

  return (
    <>
      <canvas ref={canvasRef} />
      {children}
    </>
  );
}
