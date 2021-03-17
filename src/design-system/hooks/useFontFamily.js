import {useTheme} from '../context';
import {StyleSheet} from 'react-native';

const useFontFamily = (value) => {
  const {theme} = useTheme();
  const themeValue = theme.CORE.FONT_FAMILIES[value];

  if (themeValue) {
    const style = StyleSheet.create({
      main: {
        fontFamily: theme.CORE.FONT_FAMILIES[value],
      },
    });
    return style.main;
  }
};

export default useFontFamily;