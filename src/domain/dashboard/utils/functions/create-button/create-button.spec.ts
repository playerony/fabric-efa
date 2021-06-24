import { createButton } from './create-button.function';
import { functionImportTest, toMatchSnapshot } from '@utils';

function createSnapshotTestMock() {
  const width = 100;
  const height = 30;
  const canvasElementX = 500;
  const canvasElementY = 500;
  const id = 'test_button_id';

  return createButton({ id, width, height, canvasElementX, canvasElementY });
}

describe('createButton Function', () => {
  functionImportTest(createButton);
  toMatchSnapshot(createSnapshotTestMock);
});
