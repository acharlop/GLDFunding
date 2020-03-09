import React from 'react';
import { Flex, FlexProps, Box } from 'rebass';
import styled from '@emotion/styled';

type TabProps = Omit<FlexProps, 'css'> & {
  active?: boolean;
};

type TabsProps = Omit<FlexProps, 'css'> & {
  active: number;
};

const Tab = styled(Flex)<TabProps>`
  align-items: center;
  transition: opacity 300ms, color 300ms;
  appearance: none;
  background: none;
  border: none;
  flex: 1;
  justify-content: center;
  position: relative;
  cursor: pointer;
  opacity: 0.5;
  position: relative;
  z-index: 1;
  letter-spacing: 0.02em;
  &:hover {
    opacity: 1;
  }
  ${({ active }) => active && 'opacity: 1; color: white;'}
`;
const Wrapper = styled(Flex)`
  border-bottom: 1px solid #e6e6e6;
  position: relative;
  overflow: hidden;
`;
const Percentage = styled(Box)`
  position: absolute;
  left: 0;
  height: calc(100% + 1px);
  clip-path: polygon(0 0, calc(100% - 1.5rem) 0, 100% 100%, 0% 100%);
  background: #3cc3be;
  z-index: 0;
  transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
  width: calc(100% + 1.5rem);
  transform: translateX(-100%);
`;
export const Tabs = ({ children, active, ...etc }: TabsProps) => {
  const completed = ((active + 1) * 100) / React.Children.count(children);
  return (
    <Wrapper as="nav" justifyContent="space-around" alignItems="stretch" {...etc}>
      {children}
      <Percentage
        css={{
          transform: `translateX(-${100 - completed}%)`,
        }}
      />
    </Wrapper>
  );
};

Tabs.Tab = (props: TabProps) => {
  return <Tab as="button" type="button" minHeight={['2.8rem', '50px']} {...props} py={1} />;
};
