import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import LogRocket from "logrocket";
LogRocket.init("eevpmt/react");

ReactDOM.render(<App /> , document.getElementById('root'));

registerServiceWorker();
