import React from 'react';
import Box from '../Box';
import PropTypes from 'prop-types';

// Component receives the same properties as Box
const Col = (props) => {
  // Destructuring props
  const {flex, flexDirection, cw, auto, v, h, ...rest} = props;

  // Building flex value (column width)
  const currentFlexValue = auto ? 0 : cw || 1;

  // Flex maps
  const verticalMap = {
    top: 'flex-start',
    center: 'center',
    bottom: 'flex-end',
    stretch: 'stretch',
    baseline: 'baseline',
  };
  const horizontalMap = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
    'space-between': 'space-between',
    'space-around': 'space-around',
  };

  // Template
  return (
    <Box
      {...rest}
      flex={currentFlexValue}
      justifyContent={horizontalMap[h]}
      alignItems={verticalMap[v]}
      flexDirection={flexDirection || 'row'}
    />
  );
};

// PropTypes
Col.propTypes = {
  v: PropTypes.string, //align items vertically
  h: PropTypes.string, //align items horizontally
}

export default Col;
