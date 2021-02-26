const buttonItems = () => {
  return {
    variants: {
      default: {
        variant: 'primary',
        corners: 'smooth',
        border: 'thin',
        type: 'filled',
      },
      primary: {
        variant: 'primary',
        corners: 'smooth',
        border: 'thin',
        type: 'filled',
      },
      secondary: {
        variant: 'transparent',
        corners: 'smooth',
        border: 'thin',
        type: 'filled',
      },
      grey: {
        variant: 'lightGrey',
        corners: 'smooth',
        border: 'thin',
        type: 'filled',
      },
      transparent: {
        variant: 'transparent',
        corners: 'smooth',
        border: 'thin',
        type: 'filled',
      },
    },
  };
};

export default buttonItems;
