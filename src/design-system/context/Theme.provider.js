import React, {useState} from 'react';
import ThemeContext from './Theme.context';
import defaultTheme from '../tokens';
import {
  buttons,
  switches,
  cards,
  items,
  buttonItems,
  alerts,
  avatars,
  badges,
  checkboxes,
  collapses,
  toggles,
  statuses,
  days,
} from '../tokens/components';
import deepmerge from 'deepmerge';
import PropTypes from 'prop-types';

const ThemeProvider = (props) => {
  const {useDark, theme, children} = props;

  const defaultThemeExtended = {
    ...defaultTheme,
    components: {
      BUTTONS: buttons({theme: defaultTheme}),
      SWITCHES: switches({theme: defaultTheme}),
      CARDS: cards({theme: defaultTheme}),
      ITEMS: items,
      BUTTON_ITEMS: buttonItems(),
      ALERTS: alerts(),
      AVATARS: avatars({theme: defaultTheme}),
      BADGES: badges(),
      CHECKBOXES: checkboxes({theme: defaultTheme}),
      COLLAPSES: collapses(),
      TOGGLES: toggles(),
      STATUSES: statuses(),
      DAYS: days(),
    },
  };

  // Merging default theme and theme provided to the ThemeProvider
  const customTheme = deepmerge(defaultThemeExtended, theme);

  // Theme state
  const [state, setState] = useState({
    theme: customTheme,
    useDark,
  });

  // Method for updating some parts of existing theme
  const updateTheme = (updates) => {
    setState({
      ...state,
      theme: deepmerge(state.theme, updates),
    });
  };

  // Method for replacing default theme with new theme
  const replaceTheme = (newTheme) => {
    setState({
      ...state,
      theme: deepmerge(defaultThemeExtended, newTheme),
    });
  };

  return (
    <ThemeContext.Provider value={{...state, replaceTheme, updateTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  useDark: PropTypes.bool,
  theme: PropTypes.object,
  children: PropTypes.element,
};

export default ThemeProvider;
