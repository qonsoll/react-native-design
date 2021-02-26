const alerts = () => {
  return {
    variants: {
      default: {
        leftIconName: 'info-circle',
        variant: 'info',
        corners: 'smooth',
        border: 'thin',
        type: 'filled',
        shadow: 'md',
      },
      info: {
        leftIconName: 'info-circle',
        variant: 'info',
        corners: 'smooth',
        border: 'thin',
        type: 'filled',
        shadow: 'md',
      },
      success: {
        leftIconName: 'check-circle',
        variant: 'success',
        corners: 'smooth',
        border: 'thin',
        type: 'filled',
        shadow: 'md',
      },
      warning: {
        leftIconName: 'exclamation-triangle',
        variant: 'warning',
        corners: 'smooth',
        border: 'thin',
        type: 'filled',
        shadow: 'md',
      },
      danger: {
        leftIconName: 'exclamation-triangle',
        variant: 'danger',
        corners: 'smooth',
        border: 'thin',
        type: 'filled',
        shadow: 'md',
      },
    },
  };
};

export default alerts;
