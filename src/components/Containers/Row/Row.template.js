import React from 'react';
import Box from '../Box';
import PropTypes from 'prop-types';

const Row = (props) => {
  // Destructuring props
  const {flexDirection, justifyContent, alignItems, v, h, ...rest} = props;

  // Flex maps
  const verticalMap = {
    top: 'flex-start',
    center: 'center',
    bottom: 'flex-end',
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
      justifyContent={horizontalMap[h]}
      alignItems={verticalMap[v]}
      flexDirection={flexDirection || 'row'}
    />
  );
};

// PropTypes
Row.propTypes = {
  v: PropTypes.string,
  h: PropTypes.string,
}

export default Row;
