import React from 'react';
import Item from '../Item';
import {useTheme} from '../../design-system/context';
import PropTypes from 'prop-types';

// Defaults
const DEFAULT_VARIANT = 'default'

const ButtonItem = (props) => {
  // Destructuring props
  const {
    leftIcon,
    rightIcon,
    icon,
    variant,
    size,
    shape,
    shadow,
    text,
    onPress,
    primaryInfoText,
    secondaryInfoText,
    ...rest
  } = props;

  // Using current theme context
  const {theme} = useTheme();
  const {BUTTON_ITEMS} = theme.components;

  // Template
  return (
    <Item
      leftIconName={leftIcon}
      rightIconName={rightIcon}
      iconName={icon}
      size={size}
      shape={shape}
      shadow={shadow}
      text={text}
      middleAuto={true}
      onPress={onPress}
      primaryInfoText={primaryInfoText}
      secondaryInfoText={secondaryInfoText}
      {...rest}
      {...BUTTON_ITEMS.variants[variant || DEFAULT_VARIANT]}
    />
  );
};

// PropTypes
ButtonItem.propTypes = {
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  icon: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  shape: PropTypes.string,
  shadow: PropTypes.string,
  text: PropTypes.string,
  onPress: PropTypes.func,
  primaryInfoText: PropTypes.string,
  secondaryInfoText: PropTypes.string,
}

export default ButtonItem;
