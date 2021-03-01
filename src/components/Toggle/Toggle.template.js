import React from 'react';
import Item from '../Item';
import {useTheme} from '../../design-system/context';
import Box from '../Containers/Box';
import PropTypes from 'prop-types';

// Defaults
const DEFAULT_VARIANT = 'default'

const Toggle = ({children, label, variant, onPress, fullWidth, clickable}) => {
  // Using theme context
  const {theme} = useTheme();
  const {TOGGLES} = theme.components;

  const extraProps = {};
  if (clickable) {
    extraProps.onPress = onPress || function () {};
  }

  // Template
  return (
    <Box flex={fullWidth && 1}>
      <Item
        middleAuto
        {...TOGGLES.variants[variant || DEFAULT_VARIANT]}
        {...extraProps}
        text={label}
      />
    </Box>
  );
};

// PropTypes
Toggle.propTypes = {
  children: PropTypes.oneOf([PropTypes.element, PropTypes.array, PropTypes.string]),
  label: PropTypes.string,
  variant: PropTypes.string,
  onPress: PropTypes.func,
  fullWidth: PropTypes.bool,
  clickable: PropTypes.bool,
}

export default Toggle;
