import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import { history } from "./helpers";

import Header from "./components/header/header.component";
import PrivateRoute from "./components/private-route/private-route.component";
import Alerts from "./components/alerts/alerts.component";
import HomePage from "./pages/homepage/homepage.component";
import LoginPage from "./pages/login/login.component";
import RegisterPage from "./pages/register/register.component";
import TrainingsPage from "./pages/trainings/trainings.component";

import './App.scss';

function App() {
    return (
        <div className="app">
            <Router history={history}>
                <Header />
                <Switch>
                    {/*<PrivateRoute exact path="/" component={HomePage} />*/}
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/register" component={RegisterPage} />
                    <Route exact path="/training" component={TrainingsPage} />
                </Switch>
            </Router>
            <Alerts />
        </div>
    );
}

export default App;
