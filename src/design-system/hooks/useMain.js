import {StyleSheet} from 'react-native';

const useMain = ({config, property}) => {
  const styles = config[property] || config.main;
  const style = StyleSheet.create({
    main: styles,
  });
  return style.main;
};

export default useMain;
