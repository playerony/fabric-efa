import { fabric } from 'fabric';
import { useState } from 'react';

import { Canvas } from './canvas/canvas.component';
import { Toolbox } from './toolbox/toolbox.component';

export const Dashboard = (): JSX.Element => {
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);

  return (
    <>
      <Canvas setCanvas={setCanvas} />
      <Toolbox canvas={canvas} />
    </>
  );
};
