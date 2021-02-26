import {StyleSheet} from 'react-native';

const useWidth = (value) => {
  const style = StyleSheet.create({
    main: {
      maxWidth: value && parseInt(value, 10),
    },
  });
  return style.main;
};

export default useWidth;
