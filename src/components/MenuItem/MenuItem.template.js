import React from 'react';
import Item from '../Item';
import PropTypes from 'prop-types'

// Defaults
const DEFAULT_CORNERS = 'sharp'
const DEFAULT_VARIANT = 'transparent'

const MenuItem = (props) => {
  // Destructuring props
  const {variant, rightIconHidden} = props;

  // Template
  return (
    <Item
      corners={DEFAULT_CORNERS}
      variant={variant || DEFAULT_VARIANT}
      rightIconName={!rightIconHidden && 'chevron-right'}
      leftIconSizeOverride={16}
      rightIconSizeOverride={10}
      {...props}
    />
  );
};

// PropTypes
MenuItem.propTypes = {
  variant: PropTypes.string,
  rightIconHidden: PropTypes.bool,
}

export default MenuItem;
