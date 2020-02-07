import React from 'react';

import { render } from '../utils/tests';
import { Link, linkProps } from '../components';

export type componentProps = Pick<linkProps, Exclude<keyof linkProps, 'children'>> & {
  rounded?: boolean;
};

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

const setup = (props: componentProps) => {
  useRouter.mockImplementation(() => ({
    pathName: '',
  }));
  const toggleHandler = jest.fn();
  const utils = render(<Link {...props}>Hey!</Link>);
  return {
    ...utils,
    toggleHandler,
  };
};

describe('rendering', () => {
  test('renders as expected', () => {
    const { container } = setup({ href: '/test' });
    expect(container).toMatchSnapshot();
  });
});
