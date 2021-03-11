import {BORDER_PROPS} from '../properties';
import {BORDER_TOKENS} from '../tokens';
import useBuildStyles from './useBuildStyles';
import {useTheme} from '../../../context';

const useBorders = (value) => {
  // Get theme context
  const {theme} = useTheme();

  // Building tokens using current theme
  // const TOKENS = BORDER_TOKENS({theme})[value];
  const TOKENS = theme.EXTENSIONS.ITEM_TOKENS.BORDER_TOKENS[value] || BORDER_TOKENS({theme})[value]

  // Get prop styles by value
  const PROPS = BORDER_PROPS[value];

  // Choosing correct style props
  const styles = useBuildStyles(TOKENS, PROPS);

  // Returning style object
  return styles;
};

export default useBorders;
