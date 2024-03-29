import React from 'react';
import { hooks, helpers } from '../../design-system';
import { Text as RNText } from 'react-native';
import PropTypes from 'prop-types';

// Using styling hooks and helpers
const {
  useColor,
  useFontSize,
  useFontWeight,
  useLineHeight,
  useFontVariant,
  useMargin,
  useTextAlign,
  useTextTransform,
  useFontFamily,
} = hooks;
const { compose } = helpers;

const Text = (props) => {
  // Destructuring props
  const {
    mx,
    my,
    m,
    mt,
    mr,
    mb,
    ml,
    children,
    styleOverride,
    numberOfLines,
  } = props;

  // Building styles
  const color = useColor(props.color);
  const fontSize = useFontSize(props.fontSize);
  const fontWeight = useFontWeight(props.fontWeight);
  const lineHeight = useLineHeight(props.lineHeight);
  const fontVariant = useFontVariant(props.variant);
  const margin = useMargin({ mx, my, m, mt, mr, mb, ml });
  const textAlign = useTextAlign(props.textAlign);
  const textTransform = useTextTransform(props.textTransform);
  const fontFamily = useFontFamily(props.fontFamily)

  // Merging styles into single object
  const style = compose([
    fontVariant,
    fontFamily,
    fontSize,
    lineHeight,
    fontWeight,
    color,
    textTransform,
    textAlign,
    margin,
    styleOverride,
  ]);

  // Template
  return (
    <RNText numberOfLines={numberOfLines} style={style}>
      {children}
    </RNText>
  );
};

// PropTypes
Text.propTypes = {
  mx: PropTypes.number,
  my: PropTypes.number,
  m: PropTypes.number,
  mt: PropTypes.number,
  mr: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  styleOverride: PropTypes.object,
  numberOfLines: PropTypes.number,
  variant: PropTypes.oneOf(['h1','h2','h3','h4','h5','h6','body1','body2','caption1','caption2'])
}

export default Text;
