import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import Router from "./containers/Router";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();