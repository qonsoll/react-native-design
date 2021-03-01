import React from 'react';
import {hooks, helpers} from '../../design-system';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

// Using style hooks and helpers
const {useIconSize, useColor, useMargin, useFlexbox} = hooks;
const {compose} = helpers;

const IconWrapper = (props) => {
  // Destructuring props
  const {
    name,
    size,
    color,
    sizeOverride,
    colorOverride,
    mx,
    my,
    m,
    mt,
    mr,
    mb,
    ml,
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
  } = props;

  // Using style hooks
  const themeSize = useIconSize(size);
  const themeColor = useColor(color);
  const currentSize = sizeOverride || themeSize;
  const currentColor = colorOverride || themeColor;
  const margin = useMargin({mx, my, m, mt, mr, mb, ml});
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

  // Building styles into single object
  const style = compose([margin, flexbox]);

  // Template
  return (
    <Icon
      style={style}
      name={name || 'star'}
      size={currentSize}
      color={currentColor.color || currentColor}
    />
  );
};

export default IconWrapper;
