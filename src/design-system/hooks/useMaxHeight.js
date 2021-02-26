import {StyleSheet} from 'react-native';

const useHeight = (value) => {
  const style = StyleSheet.create({
    main: {
      maxHeight: value && parseInt(value, 10),
    },
  });
  return style.main;
};

export default useHeight;
