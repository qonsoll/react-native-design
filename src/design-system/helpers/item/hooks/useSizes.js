import {SIZE_PROPS} from '../properties';
import {SIZE_TOKENS} from '../tokens';
import useBuildStyles from './useBuildStyles';
import {useTheme} from '../../../context';

const useSizes = (value) => {
  // Get theme context
  const {theme} = useTheme();

  // Building tokens using current theme
  // const TOKENS = SIZE_TOKENS({theme})[value];
  const TOKENS = theme.EXTENSIONS.ITEM_TOKENS.SIZE_TOKENS[value] || SIZE_TOKENS({theme})[value]

  // Get prop styles by value
  const PROPS = SIZE_PROPS[value];

  // Choosing correct style props
  const styles = useBuildStyles(TOKENS, PROPS);

  // Returning style object
  return styles;
};

export default useSizes;
