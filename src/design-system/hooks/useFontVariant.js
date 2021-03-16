import {useTheme} from '../context';
import {fontVariants} from '../helpers';
import {StyleSheet} from 'react-native';

const useFontVariant = (value) => {
  const {theme} = useTheme();
  const FONT_VARIANTS = fontVariants({theme});
  const style = StyleSheet.create({
    main: FONT_VARIANTS[value] || FONT_VARIANTS['body2']
  });
  return style.main;
};

export default useFontVariant;
