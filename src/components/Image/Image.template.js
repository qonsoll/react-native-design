import React from 'react';
import {Image as RNImage} from 'react-native';
import PropTypes from 'prop-types';
import {hooks, helpers} from '../../design-system';

// Using styling hooks and helpers
const {
  useWidth,
  useHeight,
  useMargin,
  useBorder,
  useFlexbox,
  usePosition,
} = hooks;
const {compose} = helpers;

const Image = (props) => {
  // Destructuring props
  const {
    src,
    mx,
    my,
    m,
    mt,
    mr,
    mb,
    ml,
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
  } = props;

  // Styling hooks
  const width = useWidth(props.width);
  const height = useHeight(props.height);
  const margin = useMargin({mx, my, m, mt, mr, mb, ml});
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

  // Building one single style object
  const style = compose([
    width,
    height,
    margin,
    border,
    styleOverride,
    flexbox,
    boxPosition,
  ]);

  // Template
  return <RNImage style={style} source={src} />;
};

// PropTypes
Image.propTypes = {
  src: PropTypes.oneOf([PropTypes.string, PropTypes.object])
}

export default Image;
