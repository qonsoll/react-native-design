const CORNER_TOKENS = ({theme}) => {
  const {CORNERS} = theme.EXTENSIONS;
  return {
    sharp: {
      borderRadius: 0,
    },
    smooth: {
      borderRadius: CORNERS.smooth,
    },
    rounded: {
      borderRadius: CORNERS.rounded,
    },
    round: {
      borderRadius: CORNERS.round,
    },
    sharpTop: {
      borderTopLeftRadius: CORNERS.sharp,
      borderTopRightRadius: CORNERS.sharp,
    },
    sharpBottom: {
      borderBottomLeftRadius: CORNERS.sharp,
      borderBottomRightRadius: CORNERS.sharp,
    },
    sharpLeft: {
      borderTopLeftRadius: CORNERS.sharp,
      borderBottomLeftRadius: CORNERS.sharp,
    },
    sharpRight: {
      borderTopRightRadius: CORNERS.sharp,
      borderBottomRightRadius: CORNERS.sharp,
    },
    smoothTop: {
      borderTopLeftRadius: CORNERS.smooth,
      borderTopRightRadius: CORNERS.smooth,
    },
    smoothBottom: {
      borderBottomLeftRadius: CORNERS.smooth,
      borderBottomRightRadius: CORNERS.smooth,
    },
    smoothLeft: {
      borderTopLeftRadius: CORNERS.smooth,
      borderBottomLeftRadius: CORNERS.smooth,
    },
    smoothRight: {
      borderTopRightRadius: CORNERS.smooth,
      borderBottomRightRadius: CORNERS.smooth,
    },
    roundedTop: {
      borderTopLeftRadius: CORNERS.rounded,
      borderTopRightRadius: CORNERS.rounded,
    },
    roundedBottom: {
      borderBottomLeftRadius: CORNERS.rounded,
      borderBottomRightRadius: CORNERS.rounded,
    },
    roundedLeft: {
      borderTopLeftRadius: CORNERS.rounded,
      borderBottomLeftRadius: CORNERS.rounded,
    },
    roundedRight: {
      borderTopRightRadius: CORNERS.rounded,
      borderBottomRightRadius: CORNERS.rounded,
    },
  };
};

export default CORNER_TOKENS;
