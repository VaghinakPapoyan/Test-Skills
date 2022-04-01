import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import "reset-css"
import "./Style_Settings/Fonts/css/satoshi.css"
import { ThemeProvider } from 'styled-components';
import { theme } from "./Style_Settings/themes.js"
import { GlobalStyle } from "./Style_Settings/globalStyles.js"
import NotificationProvider from "./Hooks/Alert/NotificationProvider.js"
import { Provider } from "react-redux"
import { store } from "./Store/store.js"

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <NotificationProvider>
        <Provider store={store}>
          <GlobalStyle />
          <App />
        </Provider>
      </NotificationProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
