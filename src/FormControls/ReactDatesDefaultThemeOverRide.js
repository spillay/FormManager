import React from 'react'
import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aphroditeInterface from 'react-with-styles-interface-aphrodite';
import { css, withStyles } from 'react-with-styles';
import DefaultTheme from 'react-dates/lib/theme/DefaultTheme';

ThemedStyleSheet.registerInterface(aphroditeInterface);
const ReactDatesDefaultThemeOverRide = ThemedStyleSheet.registerTheme({
  reactDates: {
    ...DefaultTheme.reactDates,
    // color: {
    //   ...DefaultTheme.reactDates.color,
    //   // backgroundFocused: '#0187b4',
    //   placeholderText: '#0187b4',
    // },
    sizing: {
      inputWidth: 105,
      arrowWidth: 20,
    },

    font: {
      size: 12,
      captionSize: 12,
      input: {
        size: 13,
        lineHeight: '13px',
        size_small: 13,
        lineHeight_small: '13px',

      },
    },

  },
});

export { css, withStyles, ReactDatesDefaultThemeOverRide };