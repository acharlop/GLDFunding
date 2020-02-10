import React from 'react';

import { render } from '../../../utils/tests';
import { Header, CTA, Steps, Features, Testimonials } from '../components';
import { IconCard, IconPaper, IconMoney, IconTimer } from '../components/Icons';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('render as espected', () => {
  useRouter.mockImplementation(() => ({
    pathName: '',
  }));

  test('Header', () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
  test('CTA', () => {
    const { container } = render(<CTA />);
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
  test('Testimonials', () => {
    const { container } = render(<Testimonials />);
    expect(container).toMatchSnapshot();
  });
  test('IconCard', () => {
    const { container } = render(<IconCard />);
    expect(container).toMatchSnapshot();
  });
  test('IconPaper', () => {
    const { container } = render(<IconPaper />);
    expect(container).toMatchSnapshot();
  });
  test('IconMoney', () => {
    const { container } = render(<IconMoney />);
    expect(container).toMatchSnapshot();
  });
  test('IconTimer', () => {
    const { container } = render(<IconTimer />);
    expect(container).toMatchSnapshot();
  });
});
