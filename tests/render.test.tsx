import React from 'react';

import { render } from '../utils/tests';
import { Footer, Header, Layout, Message, Modal, Steps, Features } from '../components';

describe('render as espected', () => {
  test('Footer', () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
  test('Header', () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
  test('Layout', () => {
    const { container } = render(<Layout> hi </Layout>);
    expect(container).toMatchSnapshot();
  });
  test('Message', () => {
    const { container } = render(<Message />);
    expect(container).toMatchSnapshot();
  });
  test('Modal', () => {
    const { container } = render(<Modal isOpen> hi </Modal>);
    expect(container).toMatchSnapshot();
  });
  test('Steps', () => {
    const { container } = render(<Steps />);
    expect(container).toMatchSnapshot();
  });
  test('Features', () => {
    const { container } = render(<Features />);
    expect(container).toMatchSnapshot();
  });
});
