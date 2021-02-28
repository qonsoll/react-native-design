import React from 'react';
import {TouchableOpacity} from 'react-native';
import Text from '../Text';
import PropTypes from 'prop-types';

// Defaults
const DEFAULT_COLOR = 'primary-default'

// Link component receives the same props as Text component
const Link = (props) => {
  // Destructuring props
  const {onPress, children, color, ...rest} = props;

  // Template
  return (
    <TouchableOpacity onPress={onPress}>
      <Text color={color || DEFAULT_COLOR} {...rest}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

Link.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.string,
  color: PropTypes.string
}

export default Link;
