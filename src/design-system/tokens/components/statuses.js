const statuses = (variant) => {
  return {
    variants: {
      default: {
        wrapperBg: 'grey-8',
        bg: 'grey-18',
      },
      active: {
        wrapperBg: 'primary-lighten-8',
        bg: 'primary-default',
      },
      danger: {
        wrapperBg: 'danger-lighten-8',
        bg: 'danger-default',
      },
      warning: {
        wrapperBg: 'warning-lighten-8',
        bg: 'warning-default',
      },
    },
  };
};

export default statuses;
