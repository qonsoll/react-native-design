import {useTheme} from '../../../context';
import useTypes from './useTypes';
import useShapes from './useShapes';
import {useShadow} from '../../../hooks';
import {StyleSheet} from 'react-native';

const useItem = ({variant, size, shape, corners, type, border, shadow}) => {
  // Using values from theme provider
  const {theme} = useTheme();
  const {ITEMS} = theme.components;

  // Constructing current values
  const currentVariant = variant || ITEMS.default.variant;
  const currentBorder = border || ITEMS.default.border;
  const currentType = type || ITEMS.default.type;
  const currentSize = size || ITEMS.default.size;
  const currentCorners = corners || ITEMS.default.corners;
  const currentShape = shape || ITEMS.default.shape;

  // Building styles using appropriate hooks (useTypes and useShapes include other hooks)
  const typeStyles = useTypes({
    variant: currentVariant,
    border: currentBorder,
    type: currentType,
  });
  const shapeStyles = useShapes({
    size: currentSize,
    corners: currentCorners,
    shape: currentShape,
  });
  const shadowStyles = useShadow(shadow);
  const iconStyle = {
    size: shapeStyles.size.iconSize,
    color: typeStyles.variant.color,
    margin: shapeStyles.size.margin,
  };

  // Building styles for component parts
  const textStyle = StyleSheet.create({
    main: {
      fontSize: shapeStyles.size.fontSize,
      lineHeight: shapeStyles.size.lineHeight,
      color: typeStyles.variant.color,
    },
  });
  const infoTextStyle = StyleSheet.create({
    main: {
      color: typeStyles.variant.infoTextColor,
      fontSize: shapeStyles.size.infoTextFontSize,
      lineHeight: shapeStyles.size.infoTextLineHeight,
    },
  });
  const itemStyle = StyleSheet.create({
    main: {
      paddingVertical: shapeStyles.size.paddingVertical,
      paddingHorizontal: shapeStyles.size.paddingHorizontal,
      height: shapeStyles.size.height,
      width: shapeStyles.size.width,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: typeStyles.variant.backgroundColor,
      borderColor: typeStyles.variant.borderColor,
      borderTopColor: typeStyles.variant.borderTopColor,
      borderRightColor: typeStyles.variant.borderRightColor,
      borderBottomColor: typeStyles.variant.borderBottomColor,
      borderLeftColor: typeStyles.variant.borderLeftColor,
      color: typeStyles.variant.color,
      ...typeStyles.border,
      ...shapeStyles.corners,
      ...shadowStyles,
    },
  });

  return {
    iconStyle,
    textStyle,
    itemStyle,
    infoTextStyle,
  };
};

export default useItem;
