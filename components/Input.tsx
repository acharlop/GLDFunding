import React from 'react';
import styled from '@emotion/styled';
import { Box, BoxProps } from 'rebass';
import MaskedInput from 'react-text-mask';

const Wrapper = styled(Box)<BoxProps & { mask?: any }>`
  transition: opacity 300ms;
  background: #f5f5f5;
  border-radius: 4px;
  padding: 0 1rem;
  flex-grow: 0;
  flex-shrink: 0;
  border: 1px solid #e8e8e8;
  &:hover,
  &:focus {
    border-color: #dcdcdc;
  }
`;

export type inputProps = Pick<BoxProps, Exclude<keyof BoxProps, 'css'>> & {
  tag?: string;
  label?: string;
  name: string;
  placeholder?: string;
  mask?: (string | RegExp)[];
  type?: string;
  inputMode?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number | null | undefined;
  options?: {
    disabled?: boolean;
    label: string;
    selected?: boolean;
    hidden?: boolean;
  }[];
};
export type selectProps = Pick<BoxProps, Exclude<keyof BoxProps, 'css'>> & {
  name: string;
  options?: {
    name?: string;
    label: string;
  }[];
};

const Select = ({ name, options, ...etc }: selectProps) => (
  <Wrapper as="select" name={name} {...etc}>
    {options &&
      options.map(({ label, ...rest }) => (
        <option {...rest} key={label}>
          {label}
        </option>
      ))}
  </Wrapper>
);

const Switcher = ({ tag, name, ...etc }: { tag?: string; name: string }) => {
  switch (tag) {
    case 'masked':
      return <Wrapper as={MaskedInput} name={name} {...etc} />;
    case 'select':
      return <Select name={name} {...etc} />;
    case 'textarea':
      return <Wrapper as="textarea" name={name} {...etc} />;
    default:
      return <Wrapper as="input" name={name} {...etc} />;
  }
};
export const Input = ({ tag, label, name, ...etc }: inputProps) => (
  <>
    {label && (
      <Box as="label" htmlFor={name} className="hide-sm">
        {label}
      </Box>
    )}
    <Switcher tag={tag} name={name} {...etc} />
  </>
);
