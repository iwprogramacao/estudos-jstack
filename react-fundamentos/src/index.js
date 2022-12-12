import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import GlobalStyle from './styles/global';

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root'),
);
