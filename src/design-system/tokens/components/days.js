const days = (variant) => {
  return {
    variants: {
      default: {
        color: 'grey-12',
        bg: 'transparent',
      },
      active: {
        color: 'white',
        bg: 'grey-18',
      },
      available: {
        color: 'grey-18',
        bg: 'primary-default',
      },
      notAvailable: {
        color: 'danger-default',
        bg: 'danger-lighten-7',
      },
      partlyAvailable: {
        color: 'grey-18',
        bg: 'primary-lighten-7',
      },
    },
  };
};

export default days;
