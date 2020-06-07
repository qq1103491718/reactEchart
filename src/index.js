import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './router/router.js';
import * as serviceWorker from './serviceWorker';

import 'antd/dist/antd.less'
ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
