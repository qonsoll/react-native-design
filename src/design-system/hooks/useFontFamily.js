import {useTheme} from '../context';
import {StyleSheet} from 'react-native';

const useFontFamily = (value) => {
  const {theme} = useTheme();
  const style = StyleSheet.create({
    main: {
      fontFamily: theme.CORE.FONT_FAMILIES[value] || theme.CORE.FONT_FAMILIES['body'],
    },
  });
  return style.main;
};

export default useFontFamily;