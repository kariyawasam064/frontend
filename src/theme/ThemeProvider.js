import React from 'react';
import { ThemeProvider as MUIThemeProvider, CssBaseline } from '@mui/material';
import theme from './Theme';#update 

const ThemeProvider = ({ children }) => {
  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
};

export default ThemeProvider;
