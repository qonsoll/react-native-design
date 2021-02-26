import React from 'react';
import {useTheme} from '../../design-system/context';
import {Image, StyleSheet} from 'react-native';
import Text from '../Text';
import Box from '../Containers/Box';
import {User} from '../../assets';
import PropTypes from 'prop-types';

// Defaults
const CORNERS = {
  sharp: 0,
  smooth: 'sm',
  rounded: 'xl',
  round: 'xxl',
};
const DEFAULT_SIZE = 'md';
const DEFAULT_CORNERS = 'round';
const DEFAULT_BG = 'grey-3';
const DEFAULT_TEXT_VARIANT = 'h4';
const DEFAULT_ICON_FILL = 'black';
const DEFAULT_ICON_SIZE = 30;

const Avatar = (props) => {
  // Destructuring props
  const {src, uri, size, corners, fullName} = props;

  // Using theme context
  const {theme} = useTheme();
  const {AVATARS} = theme.components;

  // Building styles for sizes and corners
  const sizeStyles = StyleSheet.create({
    main: AVATARS.sizes[size || DEFAULT_SIZE],
  });
  const cornersStyle = StyleSheet.create({
    main: AVATARS.corners[corners || DEFAULT_CORNERS],
  });

  // Merging styles into single object
  const style = StyleSheet.flatten([sizeStyles.main, cornersStyle.main]);

  return src || uri ? (
    <Image style={style} source={uri ? {uri: uri} : src} />
  ) : (
    <Box
      width={AVATARS.sizes[size || DEFAULT_SIZE].width}
      height={AVATARS.sizes[size || DEFAULT_SIZE].height}
      borderRadius={CORNERS[corners || DEFAULT_CORNERS]}
      bg={DEFAULT_BG}
      justifyContent="center"
      alignItems="center">
      {fullName ? (
        <Text variant={DEFAULT_TEXT_VARIANT}>
          {fullName
            .match(/\b(\w)/g)
            .join('')
            .toUpperCase()}
        </Text>
      ) : (
        <User height={DEFAULT_ICON_SIZE} width={DEFAULT_ICON_SIZE} fill={DEFAULT_ICON_FILL} />
      )}
    </Box>
  );
};

Avatar.propTypes = {
  src: PropTypes.any,
  uri: PropTypes.string,
  size: PropTypes.string,
  corners: PropTypes.string,
  fullName: PropTypes.string,
}

export default Avatar;
