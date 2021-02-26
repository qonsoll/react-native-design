import React from 'react';
import PropTypes from 'prop-types';
import Box from '../Containers/Box';
import {useTheme} from '../../design-system/context';

// Defaults
const DEFAULT_BG = 'grey-2';

const Divider = (props) => {
  // Destructuring props
  const {height, variant, my, mt, mb} = props;

  // Using current theme context
  const {theme} = useTheme();
  const {COLORS} = theme.CORE;

  // Template
  return (
    <Box
      my={my}
      mt={mt}
      mb={mb}
      height={height || 1}
      bg={COLORS[variant] || DEFAULT_BG}
    />
  );
};

// PropTypes
Divider.propTypes = {
  height: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  variant: PropTypes.string,
  my: PropTypes.number,
  mt: PropTypes.number,
  mb: PropTypes.number,
}

export default Divider;
