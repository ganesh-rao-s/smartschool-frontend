import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AsyncFactory from '../../utils/AsyncFactory';

const Dashboard = AsyncFactory(() => import('../../views/dashboard/Dashboard'));
const Student = AsyncFactory(() => import('../../views/student/Student'));
const LovMaster = AsyncFactory(() => import('../../views/lov/LovMaster'));

class PageRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" name="Dashboard" component={Dashboard} />
                <Route path="/students" name="Student" component={Student} />
                <Route path="/lov" name="Student" component={LovMaster} />
            </Switch>
        )
    }
}

export default PageRoutes;