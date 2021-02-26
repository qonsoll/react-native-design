import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import {useTheme} from '../../design-system/context';
import PropTypes from 'prop-types';

const CustomCheckbox = (props) => {
  // Destructuring props
  const {
    disabled,
    value,
    onChange,
    onValueChange,
    animationDuration,
    onAnimationType,
    offAnimationType,
  } = props;

  // Using current theme context
  const {theme} = useTheme();
  const {CHECKBOXES} = theme.components;

  // Template
  return (
    <CheckBox
      disabled={disabled}
      value={value}
      onChange={onChange}
      onValueChange={onValueChange}
      animationDuration={animationDuration}
      onAnimationType={onAnimationType}
      offAnimationType={offAnimationType}
      {...CHECKBOXES.variants.default}
    />
  );
};

// PropTypes
CustomCheckbox.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.bool,
  onChange: PropTypes.func,
  onValueChange: PropTypes.func
}

export default CustomCheckbox;
