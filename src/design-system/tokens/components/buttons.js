const buttons = ({theme}) => {
  const {FONT_SIZES, LINE_HEIGHTS, ICON_SIZES} = theme.CORE;
  return {
    main: {
      alignItems: 'center',
      borderWidth: 1,
      borderStyle: 'solid',
      // alignSelf: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    text: {
      textTransform: 'uppercase',
    },
    sm: {
      paddingVertical: 4,
      paddingHorizontal: 12,
      fontSize: FONT_SIZES.body2,
      lineHeight: LINE_HEIGHTS.body2,
      iconSize: ICON_SIZES.sm,
      height: 28,
    },
    md: {
      paddingVertical: 8,
      paddingHorizontal: 16,
      fontSize: FONT_SIZES.body1,
      lineHeight: LINE_HEIGHTS.body1,
      iconSize: ICON_SIZES.md,
      height: 40,
    },
    lg: {
      paddingVertical: 12,
      paddingHorizontal: 24,
      fontSize: FONT_SIZES.h4,
      lineHeight: LINE_HEIGHTS.h4,
      iconSize: ICON_SIZES.lg,
      height: 52,
    },
  };
};

export {buttons};

export default buttons;
