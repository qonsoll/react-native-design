import {MARGINS} from '../helpers';
import {StyleSheet} from 'react-native';

const useMargin = (props) => {
  const map = {
    my: MARGINS.my,
    mx: MARGINS.mx,
    m: MARGINS.m,
    mt: MARGINS.mt,
    mr: MARGINS.mr,
    mb: MARGINS.mb,
    ml: MARGINS.ml,
  };
  const usedStyleProperties =
    Object.keys(props).length &&
    Object.keys(props).filter((property) => props[property] !== undefined);
  const stylesArr =
    usedStyleProperties.length &&
    usedStyleProperties.map((property) => map[property](props[property]));
  const stylesObj =
    stylesArr && stylesArr.reduce((obj, item) => Object.assign(obj, item, {}));
  const style = StyleSheet.create({
    main: stylesObj,
  });
  return style.main;
};

export default useMargin;
