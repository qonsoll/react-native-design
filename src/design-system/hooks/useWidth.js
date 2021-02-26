import {StyleSheet} from 'react-native';

const useWidth = (value) => {
  const style = StyleSheet.create({
    main: {
      width: value && parseInt(value, 10),
    },
  });
  return style.main;
};

export default useWidth;
