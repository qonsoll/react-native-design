import {StyleSheet} from 'react-native';

const useBoxShape = ({boxSizeProps, primaryShape}) => {
  const isSquare = primaryShape === 'square';
  const isCircle = primaryShape === 'circle';
  const styles =
    isSquare || isCircle
      ? {
          width: boxSizeProps.height,
          height: boxSizeProps.height,
          borderRadius: isSquare ? 0 : 500,
          justifyContent: 'center',
        }
      : {
          paddingVertical: boxSizeProps.paddingVertical,
          paddingHorizontal: boxSizeProps.paddingHorizontal,
        };

  const style = StyleSheet.create({
    main: styles,
  });

  return style.main;
};

export default useBoxShape;
