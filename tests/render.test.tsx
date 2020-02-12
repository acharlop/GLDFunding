import React from 'react';

import { render } from '../utils/tests';
import { Footer, Layout, Modal, Card, BreadCrumb, Carousel } from '../components';

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

  test('Card', () => {
    const { container } = render(<Card> hi </Card>);
    expect(container).toMatchSnapshot();
  });

  test('BreadCrumb', () => {
    const { container } = render(<BreadCrumb src="apply" title="Apply Now" />);
    expect(container).toMatchSnapshot();
  });

  test('Carousel', () => {
    const { container } = render(
      <Carousel
        responsive={{
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 30,
          },
        }}
      >
        <h1>Hey!</h1>
        <h1>Ho!</h1>
      </Carousel>
    );
    expect(container).toMatchSnapshot();
  });
});
