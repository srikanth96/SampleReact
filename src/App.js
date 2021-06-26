import React from 'react';
import './App.css';
import Header from './Components/Layout/Header';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme = { theme } >
      <GlobalStyles/>
      <Header/>
    </ThemeProvider>
    
  );
}

export default App;
