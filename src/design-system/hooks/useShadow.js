import {useTheme} from '../context';
import {StyleSheet} from 'react-native';

const useShadow = (value) => {
  const {theme} = useTheme();
  const style = StyleSheet.create({
    main: {
      ...theme.CORE.SHADOWS[value],
    },
  });
  return style.main;
};

export default useShadow;
