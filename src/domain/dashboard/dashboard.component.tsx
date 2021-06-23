import { fabric } from 'fabric';
import { useState, ReactNode } from 'react';

import { Canvas } from './canvas/canvas.component';
import { Toolbox } from './toolbox/toolbox.component';
import { LoadingPage } from './loading-page/loading-page.component';

import { getWindowWidth, getWindowHeight, useDebounce, useEventListener } from '@utils';

export const Dashboard = (): JSX.Element => {
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);

  const isLoading = useDebounce(!canvas, 1000);

  useEventListener('resize', () => {
    if (!canvas) {
      return;
    }

    const width = getWindowWidth();
    const height = getWindowHeight();

    canvas.setWidth(width);
    canvas.setHeight(height);
  });

  function renderContent(): ReactNode {
    if (isLoading) {
      return <LoadingPage />;
    }

    return <Toolbox canvas={canvas} />;
  }

  return (
    <>
      <Canvas setCanvas={setCanvas} />
      {renderContent()}
    </>
  );
};
