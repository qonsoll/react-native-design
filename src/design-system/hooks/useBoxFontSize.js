import {StyleSheet} from 'react-native';

const useBoxFontSize = ({boxSizeProps}) => {
  const styles = {
    fontSize: boxSizeProps.fontSize,
    lineHeight: boxSizeProps.lineHeight,
  };

  const style = StyleSheet.create({
    main: styles,
  });

  return style.main;
};

export default useBoxFontSize;
