import useBoxCorner from './useBoxCorner';
import useBoxFontSize from './useBoxFontSize';
import useBoxFontVariant from './useBoxFontVariant';
import useBoxShape from './useBoxShape';
import useBoxSize from './useBoxSize';
import useBoxVariant from './useBoxVariant';
import useMain from './useMain';
import useMargin from './useMargin';
import useShadow from './useShadow';
import useBoxIconColor from './useBoxIconColor';
import useBoxIconSize from './useBoxIconSize';
import {compose} from '../helpers';
import {useTheme} from '../context';

const DEFAULT_VARIANT = 'primary';
const DEFAULT_TYPE = 'default';
const DEFAULT_SHAPE = 'rectangle';
const DEFAULT_SIZE = 'md';
const DEFAULT_CORNER = 'smooth';

const useElementBox = ({
  variant,
  type,
  size,
  shape,
  corners,
  mx,
  my,
  m,
  mt,
  mr,
  mb,
  ml,
  shadow,
}) => {
  const {theme} = useTheme();
  const currentVariant = variant || DEFAULT_VARIANT;
  const currentType = type || DEFAULT_TYPE;
  const currentSize = size || DEFAULT_SIZE;
  const currentShape = shape || DEFAULT_SHAPE;
  const currentCorners = corners || DEFAULT_CORNER;
  const boxMain = useMain({
    config: theme.components.BUTTONS,
  });
  const boxFontMain = useMain({
    config: theme.components.BUTTONS,
    property: 'text',
  });
  const boxVariant = useBoxVariant({
    variant: currentVariant,
    type: currentType,
  });
  const boxFontVariant = useBoxFontVariant({
    variant: currentVariant,
    type: currentType,
  });
  const boxIconColor = useBoxIconColor({
    variant: currentVariant,
    type: currentType,
  });

  const boxSize = useBoxSize({
    size: currentSize,
    config: theme.components.BUTTONS,
  });
  const boxFontSize = useBoxFontSize({
    boxSizeProps: boxSize,
  });
  const boxIconSize = useBoxIconSize({
    boxSizeProps: boxSize,
  });
  const boxCorners = useBoxCorner({
    type: currentCorners,
  });
  const boxShape = useBoxShape({
    boxSizeProps: boxSize,
    primaryShape: currentShape,
  });
  const margin = useMargin({mx, my, m, mt, mr, mb, ml});
  const boxShadow = useShadow(shadow);

  const boxStyle = compose([
    boxMain,
    boxVariant,
    boxCorners,
    boxShape,
    margin,
    boxShadow,
  ]);

  const boxFontStyle = compose([boxFontVariant, boxFontSize, boxFontMain]);

  const boxIconStyle = {...boxIconColor, ...boxIconSize};

  return {
    boxStyle,
    boxFontStyle,
    boxIconStyle,
  };
};

export default useElementBox;
