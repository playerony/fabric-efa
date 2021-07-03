import { memo, useRef, useEffect } from 'react';

import S from './canvas.styles';

import { createCanvas } from './utils';
import { CanvasProps } from './canvas.types';

export const Canvas = memo(({ setCanvas }: CanvasProps): JSX.Element => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const createdCanvas = createCanvas(canvasRef);

    if (createdCanvas !== null) {
      setCanvas(createdCanvas);
    }
  }, [setCanvas]);

  return <S.StyledCanvas ref={canvasRef} />;
});
