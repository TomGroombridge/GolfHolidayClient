import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
// import Routes from './Routes';
import AppLayout from './AppLayout/index'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <AppLayout />,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();

