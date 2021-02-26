import {useTheme} from '../context';
import {boxVariants} from '../helpers';
import {StyleSheet} from 'react-native';

const useBoxFontVariant = ({variant, type}) => {
  const {theme} = useTheme();
  const BOX_VARIANTS = boxVariants({theme});
  const styles = {
    color: BOX_VARIANTS[variant][type].color,
  };
  const style = StyleSheet.create({
    main: styles,
  });
  return style.main;
};

export default useBoxFontVariant;
