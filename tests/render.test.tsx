import React from 'react';

import { render } from '../utils/tests';
import { Footer, Layout, Modal } from '../components';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('render as espected', () => {
  useRouter.mockImplementation(() => ({
    pathName: '',
  }));
  test('Footer', () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });

  test('Layout', () => {
    const { container } = render(<Layout> hi </Layout>);
    expect(container).toMatchSnapshot();
  });

  test('Modal', () => {
    const { container } = render(<Modal isOpen> hi </Modal>);
    expect(container).toMatchSnapshot();
  });
});
