const SIZE_TOKENS = ({theme}) => {
  const {FONT_SIZES, LINE_HEIGHTS, ICON_SIZES} = theme.CORE;
  return {
    xs: {
      paddingHorizontal: 4,
      fontSize: FONT_SIZES.caption1,
      lineHeight: LINE_HEIGHTS.caption1,
      infoTextFontSize: FONT_SIZES.caption2,
      infoTextLineHeight: LINE_HEIGHTS.caption2,
      iconSize: ICON_SIZES.xs,
      height: 20,
      width: 20,
      margin: 4
    },
    sm: {
      paddingHorizontal: 12,
      fontSize: FONT_SIZES.body2,
      lineHeight: LINE_HEIGHTS.body2,
      infoTextFontSize: FONT_SIZES.caption1,
      infoTextLineHeight: LINE_HEIGHTS.caption1,
      iconSize: ICON_SIZES.sm,
      height: 28,
      width: 28,
      margin: 12
    },
    md: {
      paddingHorizontal: 16,
      fontSize: FONT_SIZES.body2,
      lineHeight: LINE_HEIGHTS.body1,
      infoTextFontSize: FONT_SIZES.caption1,
      infoTextLineHeight: LINE_HEIGHTS.caption1,
      iconSize: ICON_SIZES.md,
      height: 40,
      width: 40,
      margin: 16
    },
    lg: {
      paddingHorizontal: 24,
      fontSize: FONT_SIZES.h4,
      lineHeight: LINE_HEIGHTS.h4,
      infoTextFontSize: FONT_SIZES.body1,
      infoTextLineHeight: LINE_HEIGHTS.body1,
      iconSize: ICON_SIZES.lg,
      height: 52,
      width: 52,
      margin: 24
    },
    xl: {
      paddingHorizontal: 28,
      fontSize: FONT_SIZES.h3,
      lineHeight: LINE_HEIGHTS.h3,
      infoTextFontSize: FONT_SIZES.h4,
      infoTextLineHeight: LINE_HEIGHTS.h4,
      iconSize: ICON_SIZES.xl,
      height: 64,
      width: 64,
      margin: 28
    },
  };
};

export default SIZE_TOKENS;
