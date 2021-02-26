const cards = ({theme}) => {
  const {COLORS, BORDER_WIDTHS, BORDER_RADIUSES} = theme.CORE;
  return {
    main: {
      flex: 1,
      flexDirection: 'row',
      borderRadius: BORDER_RADIUSES.md,
    },
    header: {
      padding: 16,
      backgroundColor: '#ffffff',
      borderBottomColor: COLORS['grey-2'],
      borderBottomWidth: BORDER_WIDTHS.xs,
      borderTopLeftRadius: BORDER_RADIUSES.md,
      borderTopRightRadius: BORDER_RADIUSES.md,
    },
    content: {
      padding: 16,
    },
    footer: {
      padding: 16,
      backgroundColor: '#ffffff',
      borderTopColor: COLORS['grey-2'],
      borderTopWidth: BORDER_WIDTHS.xs,
      borderBottomLeftRadius: BORDER_RADIUSES.md,
      borderBottomRightRadius: BORDER_RADIUSES.md,
    },
    white: {
      backgroundColor: '#ffffff',
    },
    'white-bordered': {
      backgroundColor: '#ffffff',
      borderColor: COLORS['grey-2'],
      borderWidth: BORDER_WIDTHS.xs,
    },
    'white-selected': {
      backgroundColor: '#ffffff',
      borderColor: COLORS['primary-default'],
      borderWidth: BORDER_WIDTHS.xs,
    },
  };
};

export {cards};

export default cards;
