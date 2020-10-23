import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { datadogRum } from "@datadog/browser-rum";

datadogRum.init({
  applicationId: "ed60177c-c36c-40e2-9ed8-a017d4d94bfd",
  clientToken: "pubd99efc14d6c71b3664636ca9bddbf325",
  site: "datadoghq.com",
  //  service: 'my-web-application',
  //  env: 'production',
  //  version: '1.0.0',
  sampleRate: 100,
  trackInteractions: true,
});



ReactDOM.render(<App /> , document.getElementById('root'));

registerServiceWorker()
