import {useTheme} from '../context';
import {StyleSheet} from 'react-native';

const useFontSize = (value) => {
  const {theme} = useTheme();
  const style = StyleSheet.create({
    main: {
      fontSize: theme.CORE.FONT_SIZES[value],
    },
  });
  return style.main;
};

export default useFontSize;
