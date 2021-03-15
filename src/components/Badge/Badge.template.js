import React from 'react';
import Item from '../Item';
import {useTheme} from '../../design-system/context';
import PropTypes from 'prop-types';

// Defaults
const DEFAULT_VARIANT = 'default'

const Badge = (props) => {
  // Destructuring props
  const {variant, text, size} = props;

  // Using current theme context
  const {theme} = useTheme();
  const {BADGES} = theme.components;

  // Template
  return <Item text={text} size={size} {...BADGES.variants[variant || DEFAULT_VARIANT]} />;
};

// PropTypes
Badge.propTypes = {
  variant: PropTypes.string,
  text: PropTypes.string,
}

export default Badge;
