import React, {Suspense} from 'react';
import * as ReactDOM from "react-dom";
import './css/index.css';
import App from './components/App';
import './i18n';

// loading component for suspense fallback
const Loader = () => (
  <div className="loading">
    <div>loading...</div>
  </div>
);


ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>  
  </React.StrictMode>,
  document.getElementById('root')
);
