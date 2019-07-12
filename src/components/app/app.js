import React from 'react';
import { Route, Switch ,Redirect } from 'react-router-dom';

import { ClockPage,ErrorPage } from '../../views/pages';

import './app.scss';



const App = () =>{

    const WrappedClockPage = (props) => {
        return (<ClockPage {...props} />);
    };

    const WrappedError404 = (props) => {
        return (<ErrorPage {...props} />);
    };

    return (
        <Switch>

            <Route path="/"
                   component={WrappedClockPage}
                   exact

            />

            <Route path="/Error404"
                   component={WrappedError404}

            />

            <Redirect to="/Error404"/>
        </Switch>
            );
};


export default App;
