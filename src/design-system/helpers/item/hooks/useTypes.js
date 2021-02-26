import useBorders from './useBorders';
import useVariants from './useVariants';
import {TYPE_PROPS} from '../properties';
import useBuildStyles from './useBuildStyles';

const useTypes = ({variant, border, type}) => {
  const PROPS = TYPE_PROPS[type];
  const variantTokens = useVariants(variant);
  const currentBorderMap = {
    borderedTop: `${border}Top`,
    borderedRight: `${border}Right`,
    borderedBottom: `${border}Bottom`,
    borderedLeft: `${border}Left`,
    borderedHorizontal: `${border}Horizontal`,
    borderedVertical: `${border}Vertical`,
  };
  const currentBorder = currentBorderMap[type] || border;
  const borderTokens = useBorders(currentBorder);
  const variantStyles = useBuildStyles(variantTokens, PROPS);
  const borderStyles = useBuildStyles(borderTokens, PROPS);
  return {
    border: borderStyles,
    variant: variantStyles,
  };
};

export default useTypes;
