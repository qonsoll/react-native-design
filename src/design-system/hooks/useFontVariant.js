import {useTheme} from '../context';
import {fontVariants} from '../helpers';
import {StyleSheet} from 'react-native';

const DEFAULT_FONT_VARIANT = 'body2'

const useFontVariant = (value) => {
  const {theme} = useTheme();
  const FONT_VARIANTS = fontVariants({theme});
  const style = StyleSheet.create({
    main: FONT_VARIANTS[value] || DEFAULT_FONT_VARIANT,
  });
  return style.main;
};

export default useFontVariant;
