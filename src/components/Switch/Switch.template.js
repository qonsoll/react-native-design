import React from 'react';
import {useTheme} from '../../design-system';
import {Switch as RNSwitch} from 'react-native';
import PropTypes from 'prop-types';

// Defaults
const DEFAULT_VARIANT = 'primary';

const Switch = (props) => {
  // Destructuring props
  const {onPress, value, variant} = props;

  // Using theme context
  const {theme} = useTheme();
  const SWITCHES = theme.components.SWITCHES;

  // Building style object
  const style = SWITCHES[variant || DEFAULT_VARIANT];

  // Template
  return (
    <RNSwitch
      trackColor={{false: style.off.trackColor, true: style.on.trackColor}}
      thumbColor={value ? style.on.thumbColor : style.off.thumbColor}
      ios_backgroundColor={style.off.trackColor}
      onValueChange={onPress}
      value={value}
    />
  );
};

// PropTypes
Switch.propTypes = {
  onPress: PropTypes.func,
  value: PropTypes.bool,
  variant: PropTypes.string,
}

export default Switch;
