import React from 'react';
import {Switch, Route } from 'react-router-dom';

import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Request from './components/Request/Request';

export const RoutesApp = (
    <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/request" exact component={Request} />
    </Switch>
)