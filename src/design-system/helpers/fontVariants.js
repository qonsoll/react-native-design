const fontVariants = ({theme}) => {
  const {
    FONT_SIZES,
    LINE_HEIGHTS,
    FONT_FAMILIES,
    FONT_WEIGHTS,
    LETTER_SPACINGS,
    COLORS
  } = theme.CORE;
  const defaultFontVariants = {
    h1: {
      fontSize: FONT_SIZES.h1,
      lineHeight: LINE_HEIGHTS.h1,
      fontFamily: FONT_FAMILIES.heading,
      fontWeight: FONT_WEIGHTS.bold,
    },
    h2: {
      fontSize: FONT_SIZES.h2,
      lineHeight: LINE_HEIGHTS.h2,
      fontFamily: FONT_FAMILIES.heading,
      fontWeight: FONT_WEIGHTS.bold,
    },
    h3: {
      fontSize: FONT_SIZES.h3,
      lineHeight: LINE_HEIGHTS.h3,
      fontFamily: FONT_FAMILIES.heading,
      fontWeight: FONT_WEIGHTS.bold,
    },
    h4: {
      fontSize: FONT_SIZES.h4,
      lineHeight: LINE_HEIGHTS.h4,
      fontFamily: FONT_FAMILIES.heading,
      fontWeight: FONT_WEIGHTS.bold,
    },
    h5: {
      fontSize: FONT_SIZES.h5,
      lineHeight: LINE_HEIGHTS.h5,
      fontFamily: FONT_FAMILIES.heading,
      fontWeight: FONT_WEIGHTS.bold,
    },
    h6: {
      fontSize: FONT_SIZES.h6,
      lineHeight: LINE_HEIGHTS.h6,
      fontFamily: FONT_FAMILIES.heading,
      fontWeight: FONT_WEIGHTS.bold,
    },
    body1: {
      fontSize: FONT_SIZES.body1,
      lineHeight: LINE_HEIGHTS.body1,
      fontFamily: FONT_FAMILIES.body,
    },
    body2: {
      fontSize: FONT_SIZES.body2,
      lineHeight: LINE_HEIGHTS.body2,
      fontFamily: FONT_FAMILIES.body,
    },
    caption1: {
      fontSize: FONT_SIZES.caption1,
      lineHeight: LINE_HEIGHTS.caption1,
      letterSpacing: LETTER_SPACINGS.caption1,
      fontFamily: FONT_FAMILIES.body,
    },
    caption2: {
      fontSize: FONT_SIZES.caption2,
      lineHeight: LINE_HEIGHTS.caption2,
      letterSpacing: LETTER_SPACINGS.caption2,
      fontFamily: FONT_FAMILIES.body,
    },
  };

  return defaultFontVariants;
};

export default fontVariants;
