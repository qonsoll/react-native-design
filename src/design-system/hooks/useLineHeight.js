import {useTheme} from '../context';
import {StyleSheet} from 'react-native';

const useLineHeight = (value) => {
  const {theme} = useTheme();
  const style = StyleSheet.create({
    main: {
      lineHeight: theme.CORE.LINE_HEIGHTS[value] || theme.CORE.LINE_HEIGHTS['body2'] ,
    },
  });
  return style.main;
};

export default useLineHeight;
