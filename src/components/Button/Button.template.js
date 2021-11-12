import React from 'react';
import PropTypes from 'prop-types'
import Spinner from '../Spinner';
import {Text, TouchableOpacity} from 'react-native';
import {hooks} from '../../design-system';
const {useElementBox} = hooks;
const Button = (props) => {
  const {children, onPress, loading, disabled} = props;
  const {boxStyle, boxFontStyle, boxIconStyle} = useElementBox({
    variant: disabled ? 'grey-light' : props.variant,
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

  const isDisabled = disabled||loading

  return (
    <TouchableOpacity style={boxStyle} onPress={!isDisabled&&onPress} disabled={isDisabled}>
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

Button.propTypes = {
  onPress: PropTypes.func,
  loading: PropTypes.bool,
  disabled:PropTypes.bool,
  variant: PropTypes.string,
  type:PropTypes.string,
  size:PropTypes.func,
  iconLeft:PropTypes.node,
  iconRight:PropTypes.node,
}


export default Button;
