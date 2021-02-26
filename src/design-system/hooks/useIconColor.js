import {useTheme} from '../context';

const useIconColor = (value) => {
  const {theme} = useTheme();
  return theme.CORE.COLORS[value];
};

export default useIconColor;
