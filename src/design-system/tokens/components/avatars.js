const avatars = ({theme}) => {
  const {CORNERS} = theme.EXTENSIONS;
  return {
    corners: {
      sharp: {
        borderRadius: 0,
      },
      smooth: {
        borderRadius: CORNERS.smooth,
      },
      round: {
        borderRadius: CORNERS.round,
      },
    },
    sizes: {
      xs: {
        height: 20,
        width: 20,
      },
      sm: {
        height: 28,
        width: 28,
      },
      md: {
        height: 40,
        width: 40,
      },
      lg: {
        height: 52,
        width: 52,
      },
      xl: {
        height: 64,
        width: 64,
      },
      xxl: {
        height: 128,
        width: 128,
      },
    },
  };
};

export default avatars;
