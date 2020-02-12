import React from 'react';

import { render } from '../utils/tests';
import { Link } from '../components';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('rendering', () => {
  useRouter.mockImplementation(() => ({
    pathName: '',
  }));
  test('renders as expected', () => {
    const { container } = render(<Link href="/test">Hey!</Link>);
    expect(container).toMatchSnapshot();
  });
});
