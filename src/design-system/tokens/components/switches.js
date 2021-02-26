const switches = ({theme}) => {
  const {COLORS} = theme.CORE;
  return {
    primary: {
      off: {
        trackColor: COLORS['grey-1'],
        thumbColor: '#ffffff',
      },
      on: {
        trackColor: COLORS['primary-default'],
        thumbColor: '#ffffff',
      },
    },
    success: {
      off: {
        trackColor: COLORS['grey-1'],
        thumbColor: '#ffffff',
      },
      on: {
        trackColor: COLORS['success-default'],
        thumbColor: '#ffffff',
      },
    },
    warning: {
      off: {
        trackColor: COLORS['grey-1'],
        thumbColor: '#ffffff',
      },
      on: {
        trackColor: COLORS['warning-default'],
        thumbColor: '#ffffff',
      },
    },
    danger: {
      off: {
        trackColor: COLORS['grey-1'],
        thumbColor: '#ffffff',
      },
      on: {
        trackColor: COLORS['danger-default'],
        thumbColor: '#ffffff',
      },
    },
  };
};

export {switches};

export default switches;
