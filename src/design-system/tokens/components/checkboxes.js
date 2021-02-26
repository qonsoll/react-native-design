const checkboxes = ({theme}) => {
  const {COLORS} = theme.CORE;
  return {
    variants: {
      default: {
        tintColors: {
          true: COLORS['primary-default'],
          false: COLORS['grey-14'],
        },
        boxType: 'square',
        tintColor: COLORS['grey-14'],
        onCheckColor: COLORS['primary-default'],
        onTintColor: COLORS['grey-14'],
      },
    },
  };
};

export default checkboxes;
