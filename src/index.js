import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from "react-router-dom";

import App from './components/app';
import ErrorBoundry from './components/error-boundry';

ReactDOM.render(
        <ErrorBoundry>
                <Router>
                    <App/>
                </Router>
        </ErrorBoundry>,
    document.getElementById('root')
);