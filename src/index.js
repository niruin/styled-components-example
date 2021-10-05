import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Router} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import {App} from './app/app';

import {history} from './common/routing';
import {GlobalStyle} from './styles/global-style';

function Root() {
  return (
    <>
      <GlobalStyle />
      <HashRouter history={history}>
        <App />
      </HashRouter>
    </>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
