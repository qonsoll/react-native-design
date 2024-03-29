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
const DEFAULT_BG = 'grey-8';
const DEFAULT_TEXT_VARIANT = 'h4';
const DEFAULT_ICON_FILL = 'grey-4';
const DEFAULT_ICON_SIZE = 30;

const Avatar = (props) => {
  // Destructuring props
  const {src, uri, size, corners, fullName, textVariant} = props;

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
        <Text variant={textVariant || DEFAULT_TEXT_VARIANT}>
          {fullName
            .split(' ')
            .map((item) => item[0])
            .join('')
            .toUpperCase()}
        </Text>
      ) : (
        <User height={DEFAULT_ICON_SIZE} width={DEFAULT_ICON_SIZE} fill={theme.CORE.COLORS[DEFAULT_ICON_FILL]} />
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
  textVariant: PropTypes.oneOf(['h1','h2','h3','h4','h5','h6','body1','body2','caption1','caption2']),
}

export default Avatar;
