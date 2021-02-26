import {StyleSheet} from 'react-native';

const usePosition = ({position, top, right, bottom, left, zIndex}) => {
  const style = StyleSheet.create({
    main: {
      position,
      top,
      right,
      bottom,
      left,
      zIndex,
    },
  });
  return style.main;
};

export default usePosition;
