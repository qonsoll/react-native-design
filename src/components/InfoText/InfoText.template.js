import React from 'react';
import Box from '../Containers/Box';
import Text from '../Text';
import PropTypes from 'prop-types';

const InfoText = (props) => {
  // Destructuring props
  const {icon, text, textVariant, ml, mb, boxProps, ...rest} = props;

  // Template
  return (
    <Box flexDirection="row" alignItems="center" mb={mb || 0} {...boxProps}>
      {icon}
      <Text variant={textVariant || 'caption1'} ml={ml || 8} {...rest}>
        {text}
      </Text>
    </Box>
  );
};

// PropTypes
InfoText.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string,
  textVariant: PropTypes.string,
  ml: PropTypes.number,
  mb: PropTypes.number,
  boxProps: PropTypes.object,
}

export default InfoText;
