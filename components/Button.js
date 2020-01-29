import React from 'react';
import { Button as BaseButton } from 'rebass';

export const Button = ({ disabled, children, rounded, ...props }) => {
  let tag;
  tag = props.href ? 'a' : 'button';
  tag = tag === 'a' && disabled ? 'span' : tag;

  return (
    <BaseButton
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: rounded ? '30px' : '4px',
      }}
      as={tag}
      disabled={disabled && tag === 'button' ? disabled : undefined}
      {...props}
    >
      {children}
    </BaseButton>
  );
};
