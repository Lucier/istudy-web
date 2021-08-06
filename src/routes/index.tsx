import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Students from '../pages/Students';
import Courses from '../pages/Courses';
import Subjects from '../pages/Subjects';
import Schools from '../pages/Schools';
import Teachers from '../pages/Teachers';
import Classrooms from '../pages/Classrooms';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/students" component={Students} />
    <Route path="/courses" component={Courses} />
    <Route path="/subjects" component={Subjects} />
    <Route path="/Schools" component={Schools} />
    <Route path="/teachers" component={Teachers} />
    <Route path="/classrooms" component={Classrooms} />
  </Switch>
);

export default Routes;
