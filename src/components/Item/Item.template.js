import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Row from '../Containers/Row';
import Col from '../Containers/Col';
import Icon from '../Icon';
import Text from '../Text';

// Using item hook
import {useItem} from '../../design-system/helpers/item/hooks';

// Defaults
const DEFAULT_SHAPE = 'rectangle';

const Item = (props) => {
  // Destructuring props
  const {
    children,
    leftIconName,
    leftImage,
    rightIconName,
    rightImage,
    iconName,
    variant,
    size,
    shape,
    corners,
    type,
    border,
    shadow,
    component,
    text,
    middleAuto,
    onPress,
    primaryInfoText,
    secondaryInfoText,
    leftIconSizeOverride,
    rightIconSizeOverride,
  } = props;
  const currentShape = shape || DEFAULT_SHAPE;

  // Building item styles
  const {iconStyle, textStyle, itemStyle, infoTextStyle} = useItem({
    variant,
    size,
    shape: currentShape,
    corners,
    type,
    border,
    shadow,
  });
  const isRectangleShape = currentShape === DEFAULT_SHAPE;

  // Content template
  const Content = (
    <Row v="center">
      {isRectangleShape && (leftIconName || leftImage) && (
        <Col v="center" auto mr={iconStyle.margin}>
          {leftIconName ? (
            <Icon
              name={leftIconName}
              colorOverride={iconStyle.color}
              sizeOverride={leftIconSizeOverride || iconStyle.size}
            />
          ) : (
            leftImage
          )}
        </Col>
      )}
      <Col auto={!isRectangleShape || middleAuto}>
        {text && <Text styleOverride={textStyle.main}>{text}</Text>}
        {iconName && (
          <Icon
            name={iconName}
            colorOverride={iconStyle.color}
            sizeOverride={iconStyle.size}
          />
        )}
        {component ||
          (children &&
            React.cloneElement(component || children, {
              styleOverride: textStyle.main,
            }))}
      </Col>
      {isRectangleShape && (rightIconName || rightImage) && (
        <Col v="center" auto ml={iconStyle.margin}>
          {rightIconName ? (
            <Icon
              name={rightIconName}
              colorOverride={iconStyle.color}
              sizeOverride={rightIconSizeOverride || iconStyle.size}
            />
          ) : (
            rightImage
          )}
        </Col>
      )}
    </Row>
  );

  // Template
  return onPress ? (
    <View>
      {primaryInfoText && (
        <Text styleOverride={infoTextStyle.main}>{primaryInfoText}</Text>
      )}
      <TouchableOpacity style={itemStyle.main} onPress={onPress}>
        {Content}
      </TouchableOpacity>
      {secondaryInfoText && (
        <Text styleOverride={infoTextStyle.main}>{secondaryInfoText}</Text>
      )}
    </View>
  ) : (
    <View>
      {primaryInfoText && (
        <Text styleOverride={infoTextStyle.main}>{primaryInfoText}</Text>
      )}
      <View style={itemStyle.main}>{Content}</View>
      {secondaryInfoText && (
        <Text styleOverride={infoTextStyle.main}>{secondaryInfoText}</Text>
      )}
    </View>
  );
};

export default Item;
