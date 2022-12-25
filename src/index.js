import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/index.css';
import '@aws-amplify/ui-react/styles.css';
import {Amplify} from 'aws-amplify';
import config from './aws-exports';
import { AmplifyProvider } from '@aws-amplify/ui-react';


Amplify.configure(config);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AmplifyProvider>
      <div className='App'>
          <App/>
        </div>
    </AmplifyProvider>
);

