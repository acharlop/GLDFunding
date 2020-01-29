import { colors } from './colors';
const hoverSelector = ':hover:not(:disabled)';

const buttonStyles = {
  cursor: 'pointer',
  transition: 'all 0.2s',
  px: '1em',
  py: '.7em',
  minHeight: 30,
  outline: 'none',
  color: 'white',
  fontFamily: 'body',
  fontWeight: 3,
};

export const buttons = {
  primary: {
    ...buttonStyles,
    background: `linear-gradient(to right, ${colors.blue200} 0%, ${colors.green500}  100%)`,
    backgroundSize: '200% 100%',
    backgroundPosition: '10% 0%',
    [hoverSelector]: {
      backgroundPosition: '100% 0%',
    },
  },
  clear: {
    ...buttonStyles,
    background: 'transparent',
  },
  outlined: {
    ...buttonStyles,
    background: 'transparent',
    border: '2px solid',
    borderColor: 'currentColor',
  },
};
