import {useTheme} from '../context';
import {boxVariants} from '../helpers';

const useBoxIconColor = ({variant, type}) => {
  const {theme} = useTheme();
  const BOX_VARIANTS = boxVariants({theme});
  const styles = {
    color: BOX_VARIANTS[variant][type].color,
  };
  const style = {
    main: styles,
  };
  return style.main;
};

export default useBoxIconColor;
