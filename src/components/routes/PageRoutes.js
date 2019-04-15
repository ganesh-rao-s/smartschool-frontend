import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AsyncFactory from '../../utils/AsyncFactory';

const Dashboard = AsyncFactory(() => import('../../views/dashboard/Dashboard'));
const Student = AsyncFactory(() => import('../../views/student/Student'));
const Teacher = AsyncFactory(() => import('../../views/teacher/Teacher'));
const LovMaster = AsyncFactory(() => import('../../views/lov/LovMaster'));
const Admission = AsyncFactory(() => import('../../views/admission/Admission'));
const Timetable = AsyncFactory(() => import('../../views/timetable/Timetable'));
const Attendance = AsyncFactory(() => import('../../views/attendance/Attendance'));


class PageRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" name="Dashboard" component={Dashboard} />
                <Route path="/students" name="Student" component={Student} />
                <Route path="/lov" name="Student" component={LovMaster} />
                <Route path="/teachers" name="Student" component={Teacher} />
                <Route path="/admission" name="Student" component={Admission} />
                <Route path="/timetable" name="Student" component={Timetable} />
                <Route path="/attendance" name="Attendance" component={Attendance} />
            </Switch>
        )
    }
}

export default PageRoutes;