import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// ES module-style import
import Bugsnag from '@bugsnag/js';

Bugsnag.start('4bdc46bfd78dc125f3934e9d2de98dc3');

ReactDOM.render(<App /> , document.getElementById('root'));

registerServiceWorker();
