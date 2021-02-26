import {useTheme} from '../context';
import {StyleSheet} from 'react-native';

const useBackgroundColor = (value) => {
  const {theme} = useTheme();
  const style = StyleSheet.create({
    main: {
      backgroundColor: theme.CORE.COLORS[value],
    },
  });
  return style.main;
};

export default useBackgroundColor;
