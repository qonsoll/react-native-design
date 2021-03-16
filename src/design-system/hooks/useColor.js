import {useTheme} from '../context';
import {StyleSheet} from 'react-native';

const useColor = (value) => {
  const {theme} = useTheme();
  const style = StyleSheet.create({
    main: {
      color: theme.CORE.COLORS[value] || theme.CORE.COLORS['grey-4'],
    },
  });
  return style.main;
};

export default useColor;
