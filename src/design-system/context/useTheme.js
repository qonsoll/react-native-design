import {useContext} from 'react';
import ThemeContext from './Theme.context';

const useTheme = () => {
  const context = useContext(ThemeContext);
  const {theme, useDark, replaceTheme, updateTheme} = context;
  return {theme, useDark, replaceTheme, updateTheme};
};

export default useTheme;
