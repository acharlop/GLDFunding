import React from 'react';
import { fireEvent } from '@testing-library/react';
import { render } from '../utils/tests';

import { Button, ButtonProps } from '../components';

const setup = (props?: ButtonProps) => {
  const clickHandler = jest.fn();
  const utils = render(
    <Button onClick={clickHandler} {...props}>
      Click me!
    </Button>
  );
  const button = utils.getByText('Click me!');
  return {
    ...utils,
    clickHandler,
    button,
  };
};

describe('rendering', () => {
  test('renders as expected', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  test('renders a button if there is no href prop', () => {
    const { button } = setup();
    expect(button.tagName).toBe('BUTTON');
  });

  test('renders a link if there is href prop', () => {
    const { button, clickHandler } = setup({ href: 'test' });

    fireEvent.click(button);
    expect(clickHandler).toBeCalledTimes(1);
    expect(button.tagName).toBe('A');
  });
});

describe('callbacks', () => {
  test('executes click handler once when clicked', () => {
    const { button, clickHandler } = setup();

    fireEvent.click(button);
    expect(clickHandler).toBeCalledTimes(1);
  });
});
