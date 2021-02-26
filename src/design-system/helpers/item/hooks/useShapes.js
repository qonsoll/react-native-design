import useSizes from './useSizes';
import useCorners from './useCorners';
import {SHAPE_PROPS} from '../properties';
import useBuildStyles from './useBuildStyles';

const useShapes = ({size, corners, shape}) => {
  // Getting shape props by shape type
  const PROPS = SHAPE_PROPS[shape];

  // Getting size tokens using useSize hook
  const sizeTokens = useSizes(size);

  // Constructing correct corners
  const shapeCornersMap = {
    circle: 'round',
    square: 'sharp'
  }
  const currentCorners = shapeCornersMap[shape] || corners;
  const cornerStyles = useCorners(currentCorners);

  // Building shape styles using props above
  const sizeStyles = useBuildStyles(sizeTokens, PROPS);

  return {
    corners: cornerStyles,
    size: sizeStyles,
  };
};

export default useShapes;
