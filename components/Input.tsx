import React from 'react';
import styled from '@emotion/styled';
import { Box, BoxProps } from 'rebass';
import MaskedInput from 'react-text-mask';
import { FaSortDown } from 'react-icons/fa';

const StyledInput = styled(Box)<BoxProps & { mask?: any }>`
  -webkit-appearance: none;
  -moz-appearance: none;
  color: currentColor;
  min-height: 2.5rem;
  transition: opacity 300ms;
  background: #f5f5f5;
  border-radius: 4px;
  flex-grow: 0;
  flex-shrink: 0;
  border: 1px solid #e8e8e8;
  padding: 0.5em;
  &:hover,
  &:focus {
    border-color: #dcdcdc;
  }
`;
const Wrapper = styled(Box)`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const SelectArrow = styled(FaSortDown)`
  position: absolute;
  right: 1rem;
  top: 1.1rem;
  opacity: 0.5;
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
    value?: string;
  }[];
};
export type selectProps = Pick<BoxProps, Exclude<keyof BoxProps, 'css'>> & {
  name: string;
  options?: {
    name?: string;
    label: string;
    value: string;
  }[];
};

const Select = ({ name, options, ...etc }: selectProps) => (
  <Wrapper>
    <SelectArrow size={16} />
    <StyledInput as="select" name={name} {...etc}>
      {options &&
        options.map(({ label, ...rest }) => (
          <option {...rest} key={label}>
            {label}
          </option>
        ))}
    </StyledInput>
  </Wrapper>
);

const Switcher = ({ tag, name, ...etc }: { tag?: string; name: string }) => {
  switch (tag) {
    case 'masked':
      return <StyledInput as={MaskedInput} name={name} {...etc} />;
    case 'select':
      return <Select name={name} {...etc} />;
    case 'textarea':
      return <StyledInput as="textarea" name={name} {...etc} />;
    default:
      return <StyledInput as="input" name={name} {...etc} />;
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
