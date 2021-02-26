import {COLORS} from '../core';

const toggles = () => {
  return {
    variants: {
      default: {
        variant: 'lightGrey',
        corners: 'round',
        border: 'thin',
        type: 'filled',
        color: COLORS['primary-dark'],
      },
      primary: {
        variant: 'primary',
        corners: 'round',
        border: 'thin',
        type: 'filled',
        color: '#fff',
      },
    },
  };
};

export default toggles;
