import React from 'react';
import Box from '../Containers/Box';
import {hooks} from '../../design-system';
import PropTypes from 'prop-types';

const {useCard} = hooks;

// Defaults
const DEFAULT_VARIANT = 'white'

const Card = (props) => {
  // Destructuring props
  const {
    variant,
    headerContent,
    footerContent,
    content,
    borderRadius,
    children,
    p,
    ...rest
  } = props;

  // Using card hook for building styles
  const styles = useCard(variant || DEFAULT_VARIANT);

  // Template
  return (
    <Box {...rest} styleOverride={[styles.mainStyle, styles.variantStyle]}>
      {headerContent && (
        <Box styleOverride={styles.headerStyle}>{headerContent}</Box>
      )}
      <Box p={p} styleOverride={styles.contentStyle}>
        {content || children}
      </Box>
      {footerContent && (
        <Box styleOverride={styles.footerStyle}>{footerContent}</Box>
      )}
    </Box>
  );
};

// PropTypes
Card.propTypes = {
  variant: PropTypes.string,
  headerContent: PropTypes.element,
  footerContent: PropTypes.element,
  content: PropTypes.element,
  borderRadius: PropTypes.string,
  children: PropTypes.oneOf([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
  p: PropTypes.number,
}

export default Card;
