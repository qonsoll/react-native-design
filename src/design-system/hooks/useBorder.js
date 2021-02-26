import {useTheme} from '../context';
import {StyleSheet} from 'react-native';

const useBorder = (props) => {
  const {theme} = useTheme();
  const {
    borderColor,
    borderWidth,
    borderTopWidth,
    borderRightWidth,
    borderBottomWidth,
    borderLeftWidth,
    borderRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
  } = props;

  const {COLORS, BORDER_WIDTHS, BORDER_RADIUSES} = theme.CORE;

  let map = {
    borderColor: COLORS[borderColor],
    borderWidth: BORDER_WIDTHS[borderWidth],
    borderTopWidth: BORDER_WIDTHS[borderTopWidth],
    borderRightWidth: BORDER_WIDTHS[borderRightWidth],
    borderBottomWidth: BORDER_WIDTHS[borderBottomWidth],
    borderLeftWidth: BORDER_WIDTHS[borderLeftWidth],
    borderRadius: BORDER_RADIUSES[borderRadius],
    borderTopLeftRadius: BORDER_RADIUSES[borderTopLeftRadius],
    borderTopRightRadius: BORDER_RADIUSES[borderTopRightRadius],
    borderBottomLeftRadius: BORDER_RADIUSES[borderBottomLeftRadius],
    borderBottomRightRadius: BORDER_RADIUSES[borderBottomRightRadius],
  };

  const usedStyleProperties =
    Object.keys(props).length &&
    Object.keys(props).filter((property) => props[property] !== undefined);

  const stylesArr =
    usedStyleProperties.length &&
    usedStyleProperties.map((property) => ({[property]: map[property]}));

  const stylesObj =
    stylesArr && stylesArr.reduce((obj, item) => Object.assign({}, item, obj));

  const style = StyleSheet.create({
    main: stylesObj,
  });

  return style.main;
};

export default useBorder;
