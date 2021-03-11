import {CORNER_PROPS} from '../properties';
import {CORNER_TOKENS} from '../tokens';
import useBuildStyles from './useBuildStyles';
import {useTheme} from '../../../context';

const useCorners = (value) => {
  // Get theme context
  const {theme} = useTheme();

  // Building tokens using current theme
  // const TOKENS = CORNER_TOKENS({theme})[value];
  const TOKENS = theme.EXTENSIONS.ITEM_TOKENS.CORNER_TOKENS[value] || CORNER_TOKENS({theme})[value]

  // Get prop styles by value
  const PROPS = CORNER_PROPS[value];

  // Choosing correct style props
  const styles = useBuildStyles(TOKENS, PROPS);

  // Returning style object
  return styles;
};

export default useCorners;
