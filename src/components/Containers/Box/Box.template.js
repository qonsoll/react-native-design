import React from 'react';
import {View} from 'react-native';
import {hooks, helpers} from '../../../design-system';
import PropTypes from 'prop-types';

// Design system hooks
const {
  useBackgroundColor,
  useWidth,
  useHeight,
  useMargin,
  usePadding,
  useBorder,
  useFlexbox,
  usePosition,
  useShadow,
  useMaxHeight,
  useMaxWidth,
} = hooks;
const {compose} = helpers;

const Box = (props) => {
  // Destructuring props
  const {
    children,
    bg,
    mx,
    my,
    m,
    mt,
    mr,
    mb,
    ml,
    px,
    py,
    p,
    pt,
    pr,
    pb,
    pl,
    borderColor,
    borderWidth,
    borderTopWidth,
    borderRightWidth,
    borderBottomWidth,
    borderLeftWidth,
    borderStyle,
    borderRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    styleOverride,
    flex,
    flexDirection,
    justifyContent,
    alignItems,
    alignSelf,
    alignContent,
    flexWrap,
    flexGrow,
    flexShrink,
    flexBasis,
    position,
    top,
    right,
    bottom,
    left,
    zIndex,
    shadow,
  } = props;

  // Hooks for building styles
  const backgroundColor = useBackgroundColor(bg);
  const width = useWidth(props.width);
  const maxHeight = useMaxHeight(props.maxHeight);
  const maxWidth = useMaxWidth(props.maxWidth);
  const height = useHeight(props.height);
  const margin = useMargin({mx, my, m, mt, mr, mb, ml});
  const padding = usePadding({px, py, p, pt, pr, pb, pl});
  const border = useBorder({
    borderColor,
    borderWidth,
    borderTopWidth,
    borderRightWidth,
    borderBottomWidth,
    borderLeftWidth,
    borderStyle,
    borderRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
  });
  const flexbox = useFlexbox({
    flex,
    flexDirection,
    justifyContent,
    alignItems,
    alignSelf,
    alignContent,
    flexWrap,
    flexGrow,
    flexShrink,
    flexBasis,
  });
  const boxPosition = usePosition({
    position,
    top,
    right,
    bottom,
    left,
    zIndex,
  });
  const shadowStyle = useShadow(shadow);

  // Composing styles into one object
  const style = compose([
    backgroundColor,
    width,
    height,
    margin,
    maxWidth,
    maxHeight,
    padding,
    border,
    styleOverride,
    flexbox,
    boxPosition,
    shadowStyle,
  ]);

  // Template
  return <View style={style}>{children}</View>;
};

// PropTypes
Box.propTypes = {
  bg: PropTypes.string,
  mx: PropTypes.number,
  my: PropTypes.number,
  m: PropTypes.number,
  mt: PropTypes.number,
  mr: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  px: PropTypes.number,
  py: PropTypes.number,
  p: PropTypes.number,
  pt: PropTypes.number,
  pr: PropTypes.number,
  pb: PropTypes.number,
  pl: PropTypes.number,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderColor: PropTypes.string,
  borderWidth: PropTypes.string,
  borderTopWidth: PropTypes.string,
  borderRightWidth: PropTypes.string,
  borderBottomWidth: PropTypes.string,
  borderLeftWidth: PropTypes.string,
  borderStyle: PropTypes.string,
  borderRadius: PropTypes.string,
  borderTopLeftRadius: PropTypes.string,
  borderTopRightRadius: PropTypes.string,
  borderBottomLeftRadius: PropTypes.string,
  borderBottomRightRadius: PropTypes.string,
  flex: PropTypes.number,
  flexDirection: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  alignSelf: PropTypes.string,
  alignContent: PropTypes.string,
  flexWrap: PropTypes.string,
  flexGrow: PropTypes.number,
  flexShrink: PropTypes.number,
  flexBasis: PropTypes.number,
  position: PropTypes.string,
  top: PropTypes.number,
  right: PropTypes.number,
  bottom: PropTypes.number,
  left: PropTypes.number,
  zIndex: PropTypes.number,
  shadow: PropTypes.string,
}

export default Box;
