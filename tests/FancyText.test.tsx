import React from 'react';

import { render } from '../utils/tests';
import { FancyText, FancyTextProps } from '../components';

type propTypes = Pick<FancyTextProps, Exclude<keyof FancyTextProps, 'theme'>>;

const setup = (props: propTypes) => render(<FancyText {...props} />);

describe('rendering', () => {
  const words = ['longerword', 'short'];

  test('renders as expected', () => {
    const { container } = setup({ words });

    expect(container).toMatchSnapshot();
  });

  test('takes longer word length', () => {
    const { container } = setup({ words });
    const hiddenText = container.querySelector('span') as HTMLSpanElement;

    expect(hiddenText.textContent).toBe(words[0]);
  });

  test('renders received words', () => {
    const { container } = setup({ words });
    const wrapper = container.querySelector('div') as HTMLDivElement;
    const rendered = wrapper.querySelectorAll('div');

    expect([rendered[0].textContent, rendered[1].textContent]).toStrictEqual(words);
  });
});
