import {useTheme} from '../context';
import {StyleSheet} from 'react-native';

const useBoxCorner = ({type}) => {
  const {theme} = useTheme();
  const style = StyleSheet.create({
    main: {
      borderRadius: theme.EXTENSIONS.CORNERS[type],
    },
  });
  return style.main;
};

export default useBoxCorner;
