const BORDER_TOKENS = ({theme}) => {
  const {BORDER_WIDTHS} = theme.CORE;
  return {
    thin: {borderWidth: BORDER_WIDTHS.xs},
    thinTop: {borderTopWidth: BORDER_WIDTHS.xs},
    thinRight: {borderRightWidth: BORDER_WIDTHS.xs},
    thinBottom: {borderBottomWidth: BORDER_WIDTHS.xs},
    thinLeft: {borderLeftWidth: BORDER_WIDTHS.xs},
    thinVertical: {
      borderTopWidth: BORDER_WIDTHS.xs,
      borderBottomWidth: BORDER_WIDTHS.xs,
    },
    thinHorizontal: {
      borderLeftWidth: BORDER_WIDTHS.xs,
      borderRightWidth: BORDER_WIDTHS.xs,
    },
    semibold: {borderWidth: BORDER_WIDTHS.md},
    semiboldTop: {borderTopWidth: BORDER_WIDTHS.md},
    semiboldRight: {borderRightWidth: BORDER_WIDTHS.md},
    semiboldBottom: {borderBottomWidth: BORDER_WIDTHS.md},
    semiboldLeft: {borderLeftWidth: BORDER_WIDTHS.md},
    semiboldVertical: {
      borderTopWidth: BORDER_WIDTHS.md,
      borderBottomWidth: BORDER_WIDTHS.md,
    },
    semiboldHorizontal: {
      borderLeftWidth: BORDER_WIDTHS.md,
      borderRightWidth: BORDER_WIDTHS.md,
    },
    bold: {borderWidth: BORDER_WIDTHS.xl},
    boldTop: {borderTopWidth: BORDER_WIDTHS.xl},
    boldRight: {borderRightWidth: BORDER_WIDTHS.xl},
    boldBottom: {borderBottomWidth: BORDER_WIDTHS.xl},
    boldLeft: {borderLeftWidth: BORDER_WIDTHS.xl},
    boldVertical: {
      borderTopWidth: BORDER_WIDTHS.xl,
      borderBottomWidth: BORDER_WIDTHS.xl,
    },
    boldHorizontal: {
      borderLeftWidth: BORDER_WIDTHS.xl,
      borderRightWidth: BORDER_WIDTHS.xl,
    },
  };
};

export default BORDER_TOKENS;
