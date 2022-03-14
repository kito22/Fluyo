import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {defaultTheme} from './Theme/Theme';

import Main from './Screens/Main';

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <>
        <StatusBar />
        <Main />
      </>
    </ThemeProvider>
  );
};

export default App;
