import React from 'react';
import {View} from 'react-native';
import Divider from '../Divider';
import MenuItem from '../MenuItem';
import PropTypes from 'prop-types';

const Menu = (props) => {
  // Destructuring props
  const {menuItems} = props;

  // Template
  return (
    <>
      {menuItems.map((menuItem, index) => {
        return (
          <View key={menuItem.text + '-' + index}>
            <MenuItem {...menuItem} />
            {menuItems.length !== index + 1 && <Divider />}
          </View>
        );
      })}
    </>
  );
};

// PropTypes
Menu.propTypes = {
  menuItems: PropTypes.array,
}

export default Menu;
