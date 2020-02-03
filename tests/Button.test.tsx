import React from 'react';
import { fireEvent } from '@testing-library/react';

import { render } from '../utils';
import { Button, ButtonProps } from '../components';

const setup = (props?: ButtonProps) => {
  const onClickHandler = jest.fn();
  const utils = render(
    <Button onClick={onClickHandler} {...props}>
      Click me!
    </Button>
  );
  const button = utils.getByText('Click me!');

  return {
    ...utils,
    onClickHandler,
    button,
  };
};

describe('<Button />', () => {
  test('should render properly', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  test('should render a button if there is no href prop', () => {
    const { button } = setup();

    expect(button.tagName).toBe('BUTTON');
  });

  test('should render a link if href prop is set', () => {
    const { button, onClickHandler } = setup({ href: 'test' });

    fireEvent.click(button);
    expect(onClickHandler).toBeCalledTimes(1);
    expect(button.tagName).toBe('A');
  });

  test('should execute event handler function once on click', () => {
    const { button, onClickHandler } = setup();

    fireEvent.click(button);
    expect(onClickHandler).toBeCalledTimes(1);
  });
});
