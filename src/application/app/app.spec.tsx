import { render } from '@testing-library/react';

import { App } from './app.component';

const wrapComponent = (props = {}) => {
  const defaultProps = {};

  return render(<App {...defaultProps} {...props} />);
};

describe('<App /> Component', () => {
  test('should render without crashing', () => {
    const { container } = wrapComponent();

    expect(container).toBeInTheDocument();
  });
});
