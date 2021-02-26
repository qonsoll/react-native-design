import {StyleSheet} from 'react-native';

const useFlexbox = ({
  flex,
  flexDirection,
  justifyContent,
  alignItems,
  alignSelf,
  alignContent,
  flexWrap,
  flexGrow,
  flexShrink,
  flexBasis,
}) => {
  const style = StyleSheet.create({
    main: {
      flex,
      flexDirection,
      justifyContent,
      alignItems,
      alignSelf,
      alignContent,
      flexWrap,
      flexGrow,
      flexShrink,
      flexBasis,
    },
  });
  return style.main;
};

export default useFlexbox;
