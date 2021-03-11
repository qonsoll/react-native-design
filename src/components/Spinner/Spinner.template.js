import React from 'react';
import {hooks} from '../../design-system';
import {ActivityIndicator} from 'react-native';

// Using styling hook
const {useColorOnly} = hooks;

// Defaults 
const DEFAULT_COLOR = 'primary-default';
const DEFAULT_SIZE = 'small';

const Spinner = (props) => {
  // Destructuring props
  const {size, color, colorCode} = props;

  // Building styles
  const currentColor = useColorOnly(color || DEFAULT_COLOR);

  // Template
  return (
    <ActivityIndicator
      size={size || DEFAULT_SIZE}
      color={colorCode || currentColor}
    />
  );
};

export default Spinner;
