import React from 'react';
import { fireEvent } from '@testing-library/react';

import { render } from '../utils/tests';
import { Navigation } from '../components';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

const setup = () => {
  useRouter.mockImplementation(() => ({
    pathName: '',
  }));
  const toggleHandler = jest.fn();
  const utils = render(<Navigation toggle={toggleHandler} />);
  return {
    ...utils,
    toggleHandler,
  };
};

describe('rendering', () => {
  test('renders as expected', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });
});

describe('callbacks', () => {
  test('executes toggle handler once when menu icon is clicked', () => {
    const { container, toggleHandler } = setup();
    const button = container.querySelector('.mb-open-btn') as HTMLDivElement;

    fireEvent.click(button);
    expect(toggleHandler).toBeCalledTimes(1);
  });
});
