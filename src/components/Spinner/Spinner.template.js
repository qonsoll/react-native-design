import React from 'react';
import {hooks} from '../../design-system';
import {ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';

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

// PropTypes
Spinner.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  colorCode: PropTypes.string,
}

export default Spinner;
