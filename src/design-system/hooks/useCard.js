import {useTheme} from '../context';
import {StyleSheet} from 'react-native';

const useCard = (variant) => {
  const {theme} = useTheme();
  const CARDS = theme.components.CARDS;
  const headerStyle = StyleSheet.create({
    main: CARDS.header,
  });
  const contentStyle = StyleSheet.create({
    main: CARDS.content,
  });
  const footerStyle = StyleSheet.create({
    main: CARDS.footer,
  });
  const variantStyle = StyleSheet.create({
    main: CARDS[variant],
  });
  const mainStyle = StyleSheet.create({
    main: CARDS.main,
  });
  return {
    headerStyle: headerStyle.main,
    contentStyle: contentStyle.main,
    footerStyle: footerStyle.main,
    mainStyle: mainStyle.main,
    variantStyle: variantStyle.main,
  };
};

export default useCard;
