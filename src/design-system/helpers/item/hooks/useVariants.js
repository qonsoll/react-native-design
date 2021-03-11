import {VARIANT_PROPS} from '../properties';
import {VARIANT_TOKENS} from '../tokens';
import useBuildStyles from './useBuildStyles';
import {useTheme} from '../../../context';

const useVariants = (value) => {
  // Get theme context
  const {theme} = useTheme();

  // Building tokens using current theme
  // const TOKENS = VARIANT_TOKENS({theme})[value];
  const TOKENS = theme?.EXTENSIONS?.ITEM_TOKENS?.VARIANT_TOKENS[value] || VARIANT_TOKENS({theme})[value]

  // Get prop styles by value
  const PROPS = VARIANT_PROPS[value];

  // Choosing correct style props
  const styles = useBuildStyles(TOKENS, PROPS);

  // Returning style object
  return styles;
};

export default useVariants;
