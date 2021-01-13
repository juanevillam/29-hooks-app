import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect,} from 'react-router-dom';

import { NavBarUseContext } from './NavBar';
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';

export const AppRouterUseContext = () => {
    return (
        <Router>
            <div>                
                <NavBarUseContext />
                <div className="container">
                    <Switch>
                        <Route exact path="/home" component={ HomeScreen } />
                        <Route exact path="/about" component={ AboutScreen } />
                        <Route exact path="/login" component={ LoginScreen } />
                        <Redirect to="/" />
                    </Switch>
                </div>
            </div>
        </Router>
    );

};