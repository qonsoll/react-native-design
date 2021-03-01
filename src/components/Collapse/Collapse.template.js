import React, {useState} from 'react';
import {useTheme} from '../../design-system/context';
import Item from '../Item';
import Box from '../Containers/Box';
import PropTypes from 'prop-types';

const Collapse = (props) => {
  // Destructuring props
  const {
    isCollapsed,
    children,
    title,
    leftIcon,
    leftImage,
    rightImage,
    p,
    px,
    py,
  } = props;

  // Using current theme context
  const {theme} = useTheme();
  const {COLLAPSES} = theme.components;

  // Component state
  const [collapsed, setCollapsed] = useState(isCollapsed);

  // Template
  return (
    <>
      <Item
        text={title}
        onPress={() => setCollapsed(!collapsed)}
        leftIconName={leftIcon}
        leftImage={leftImage}
        rightImage={rightImage}
        rightIconName={collapsed ? 'chevron-down' : 'chevron-up'}
        {...COLLAPSES.variants.default}
      />
      {!collapsed && (
        <Box p={p} px={px} py={py}>
          {children}
        </Box>
      )}
    </>
  );
};

// PropTypes
Collapse.propTypes = {
  isCollapsed: PropTypes.bool,
  title: PropTypes.string,
  leftIcon: PropTypes.string,
  leftImage: PropTypes.element,
  rightImage: PropTypes.element,
  p: PropTypes.number,
  px: PropTypes.number,
  py: PropTypes.number,
}

export default Collapse;
