import React from 'react'
import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aphroditeInterface from 'react-with-styles-interface-aphrodite';
import { css, withStyles } from 'react-with-styles';
import DefaultTheme from 'react-dates/lib/theme/DefaultTheme';

ThemedStyleSheet.registerInterface(aphroditeInterface);
const ReactDatesDefaultThemeOverRide = ThemedStyleSheet.registerTheme({
  reactDates: {
    ...DefaultTheme.reactDates,
    color: {
      ...DefaultTheme.reactDates.color,
      // backgroundFocused: '#0187b4',
      placeholderText: '#0187b4',
    },
    // sizing: {
    //   inputWidth: 50,
    //   //arrowWidth: 10,
    // },

    font: {
      size: 11,
      captionSize: 12,
      input: {
        size: 12,
        lineHeight: '12px',
        size_small: 12,
        lineHeight_small: '12px',

      },
    },

  },
});

export { ReactDatesDefaultThemeOverRide };