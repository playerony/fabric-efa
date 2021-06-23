import { BindEventsInput } from './bind-events.types';

export function bindEvents({ canvas, setSelectedObject }: BindEventsInput): void {
  if (!canvas) {
    return;
  }

  canvas.on('selection:cleared', () => {
    setSelectedObject([]);
  });

  canvas.on('selection:created', (e: any) => {
    setSelectedObject(e.selected);
  });

  canvas.on('selection:updated', (e: any) => {
    setSelectedObject(e.selected);
  });
}
