import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import './index.css';
import App from './layout/App';
import { createBrowserHistory } from "history";
import { Router, Switch } from "react-router-dom";

const hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <Route path="/" name="App" component={App} />
        </Switch>
    </Router>, document.getElementById('root'));
