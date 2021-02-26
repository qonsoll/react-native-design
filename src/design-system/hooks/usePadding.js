import {PADDINGS} from '../helpers';
import {StyleSheet} from 'react-native';

const usePadding = (props) => {
  const map = {
    py: PADDINGS.py,
    px: PADDINGS.px,
    p: PADDINGS.p,
    pt: PADDINGS.pt,
    pr: PADDINGS.pr,
    pb: PADDINGS.pb,
    pl: PADDINGS.pl,
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

export default usePadding;
