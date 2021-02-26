import {useTheme} from '../context';
import {StyleSheet} from 'react-native';

const useFontWeight = (value) => {
  const {theme} = useTheme();
  const style = StyleSheet.create({
    main: {
      fontWeight: theme.CORE.FONT_WEIGHTS[value],
    },
  });
  return style.main;
};

export default useFontWeight;
