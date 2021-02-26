import {useTheme} from '../context';

const useColorOnly = (value) => {
  const {theme} = useTheme();
  return theme.CORE.COLORS[value];
};

export default useColorOnly;
