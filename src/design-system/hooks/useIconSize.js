import {useTheme} from '../context';

const useIconSize = (value) => {
  const {theme} = useTheme();
  return theme.CORE.ICON_SIZES[value];
};

export default useIconSize;
