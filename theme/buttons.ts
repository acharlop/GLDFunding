import { colors } from './colors';
const hoverSelector = ':hover:not(:disabled)';

const buttonStyles = {
  cursor: 'pointer',
  transition: 'all 0.2s',
  px: '1.3em',
  py: '.7em',
  minHeight: ['35px', '50px'],
  outline: 'none',
  color: 'white',
  fontFamily: 'body',
  fontWeight: 3,
  minWidth: 100,
};

export const buttons = {
  primary: {
    ...buttonStyles,
    background: `linear-gradient(to right, ${colors.blue200} 0%, ${colors.green500}  50%)`,
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
