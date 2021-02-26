import React from 'react';
import Spinner from '../Spinner';
import {Text, TouchableOpacity} from 'react-native';
import {hooks} from '../../design-system';
const {useElementBox} = hooks;

const Button = (props) => {
  const {children, onPress, loading} = props;
  const {boxStyle, boxFontStyle, boxIconStyle} = useElementBox({
    variant: props.variant,
    type: props.type,
    shape: props.shape,
    size: props.size,
    corners: props.corners,
    mx: props.mx,
    my: props.my,
    m: props.m,
    mt: props.mt,
    mr: props.mr,
    mb: props.mb,
    ml: props.ml,
    shadow: props.shadow,
    iconLeft: props.iconLeft,
    iconRight: props.iconRight,
    icon: props.icon,
  });
  return (
    <TouchableOpacity style={boxStyle} onPress={onPress}>
      {loading ? (
        <Spinner colorCode={boxIconStyle.color} />
      ) : (
        <>
          {props.iconLeft &&
            React.cloneElement(props.icon, {
              mr: 8,
              sizeOverride: boxIconStyle.size,
              colorOverride: boxIconStyle.color,
            })}
          {children && <Text style={boxFontStyle}>{children}</Text>}
          {!children &&
            React.cloneElement(props.icon, {
              sizeOverride: boxIconStyle.size,
              colorOverride: boxIconStyle.color,
            })}
          {props.iconRight &&
            React.cloneElement(props.icon, {
              ml: 8,
              sizeOverride: boxIconStyle.size,
              colorOverride: boxIconStyle.color,
            })}
        </>
      )}
    </TouchableOpacity>
  );
};

export default Button;
