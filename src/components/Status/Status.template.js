import React from 'react';
import {useTheme} from '../../design-system/context';
import Box from '../Containers/Box';
import PropTypes from 'prop-types';

// Default
const DEFAULT_VARIANT = 'default';
const DEFAULT_SHADOW = 'md';

const Status = (props) => {
  // Destructuring props
  const {variant} = props;

  // Using theme context
  const {theme} = useTheme();
  const {STATUSES} = theme.components;

  // Template
  return (
    <Box
      width={16}
      height={16}
      p={4}
      bg={STATUSES.variants[variant || DEFAULT_VARIANT].wrapperBg}
      borderRadius={'md'}>
      <Box
        width={8}
        height={8}
        bg={STATUSES.variants[variant || DEFAULT_VARIANT].bg}
        borderRadius={'sm'}
        shadow={DEFAULT_SHADOW}
      />
    </Box>
  );
};

// PropTypes
Status.propTypes = {
  variant: PropTypes.string,
}

export default Status;
