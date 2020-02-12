import React from 'react';
import { fireEvent } from '@testing-library/react';
import { render } from '../utils/tests';

import { Input, inputProps } from '../components';

const setup = (props: inputProps) => {
  const inputHandler = jest.fn();
  const changeHandler = jest.fn();
  const utils = render(<Input onInput={inputHandler} onChange={changeHandler} {...props} />);
  const input = utils.container.querySelector('input') as HTMLInputElement;
  const select = utils.container.querySelector('select') as HTMLSelectElement;
  const textarea = utils.container.querySelector('textarea');
  return {
    ...utils,
    inputHandler,
    input,
    select,
    textarea,
    changeHandler,
  };
};

describe('rendering', () => {
  test('renders as expected', () => {
    const { container } = setup({ label: 'Name*', placeholder: 'Name', name: 'name' });
    expect(container).toMatchSnapshot();
  });

  test('return input when no tag is specified', () => {
    const { input } = setup({ name: 'input' });
    expect(input).toBeTruthy();
  });

  test('return textarea when specified', () => {
    const { textarea } = setup({
      name: 'textarea',
      tag: 'textarea',
    });
    expect(textarea).toBeTruthy();
  });

  test('return select when specified', () => {
    const { select } = setup({
      name: 'select',
      tag: 'select',
    });
    expect(select).toBeTruthy();
  });

  test('has proper amount of options', () => {
    const { container } = setup({
      name: 'select',
      tag: 'select',
      options: [
        {
          label: 'test',
        },
      ],
    });
    expect(container.querySelectorAll('option').length).toBe(1);
  });
});

describe('callbacks', () => {
  test('executes onInput', () => {
    const { input, inputHandler } = setup({
      name: 'input',
    });
    fireEvent.input(input);
    expect(inputHandler).toBeCalledTimes(1);
  });
  test('executes onChange', () => {
    const { select, changeHandler } = setup({
      name: 'select',
      tag: 'select',
    });
    fireEvent.change(select);
    expect(changeHandler).toBeCalledTimes(1);
  });
});
