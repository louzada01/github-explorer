import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../screens/Dashboard';
import Repository from '../screens/Repository';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/repository/:repository+" component={Repository} />
      <Route path="*" component={() => <h1>404 - Not found page</h1>} />
    </Switch>
  );
};

export default Routes;
