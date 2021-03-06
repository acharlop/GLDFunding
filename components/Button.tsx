import React from 'react';
import { Button as BaseButton, ButtonProps as BaseButtonProps } from 'rebass';

export type ButtonProps = Pick<BaseButtonProps, Exclude<keyof BaseButtonProps, 'css' | 'as'>> & {
  rounded?: boolean;
};

export const Button = ({ children, rounded, ...props }: ButtonProps) => {
  return (
    <BaseButton
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: rounded ? '30px' : '2px',
      }}
      as={props.href ? 'a' : 'button'}
      {...props}
    >
      {children}
    </BaseButton>
  );
};
