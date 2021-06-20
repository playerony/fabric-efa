import { render } from '@testing-library/react';

import { App } from './app.component';

describe('<App /> Component', () => {
  test('should render without crashing', () => {
    const { container } = render(<App />);

    expect(container).toBeInTheDocument();
  });
});
