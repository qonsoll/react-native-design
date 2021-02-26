import {useTheme} from '../context';
import {boxVariants} from '../helpers';
import {StyleSheet} from 'react-native';

const useBoxVariant = ({variant, type}) => {
  const {theme} = useTheme();
  const BOX_VARIANTS = boxVariants({theme});
  const style = StyleSheet.create({
    main: BOX_VARIANTS[variant][type],
  });
  return style.main;
};

export default useBoxVariant;
