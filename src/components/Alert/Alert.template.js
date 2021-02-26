import React from 'react';
import {useTheme} from '../../design-system/context';
import Box from '../Containers/Box';
import Item from '../Item';
import PropTypes from 'prop-types';

// Defaults
const DEFAULT_POSITION = 16;

const Alert = (props) => {
  // Destructuring props
  const {variant, text, bottom, left, right, top} = props;

  // Take theme config
  const {theme} = useTheme();
  const {ALERTS} = theme.components;

  // Template
  return (
    <Box
      position="absolute"
      bottom={bottom || DEFAULT_POSITION}
      left={left || DEFAULT_POSITION}
      right={right || DEFAULT_POSITION}
      top={top}>
      <Item text={text} {...ALERTS.variants[variant || 'default']} />
    </Box>
  );
};

// PropTypes
Alert.propTypes = {
  variant: PropTypes.string,
  text: PropTypes.string,
  bottom: PropTypes.number,
  left: PropTypes.number,
  right: PropTypes.number,
  top: PropTypes.number,
};

export default Alert;
