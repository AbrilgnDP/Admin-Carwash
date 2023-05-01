import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';


import { store } from './store/store';

import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const themeColor = createTheme({
  palette: {
    primary: {
      main: '#CC3C5C',
    },
  },
});


root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={themeColor}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  // </React.StrictMode>
);