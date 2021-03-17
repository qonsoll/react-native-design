import {useTheme} from '../context';
import {StyleSheet} from 'react-native';

const useLineHeight = (value) => {
  const {theme} = useTheme();
  const themeValue = theme.CORE.LINE_HEIGHTS[value];

  if (themeValue) {
    const style = StyleSheet.create({
      main: {
        lineHeight: theme.CORE.LINE_HEIGHTS[value],
      },
    });
    return style.main;
  }
};

export default useLineHeight;
