import ReactDOM from 'react-dom';
import { StrictMode } from 'react';

import { App } from '@application';
import reportWebVitals from './reportWebVitals';

import '@infrastructure/fabricjs/fabricjs.config';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
