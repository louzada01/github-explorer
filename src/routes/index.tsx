import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../screens/Dashboard';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/explorer" component={() => <h1>Explorer</h1>} />
      <Route path="*" component={() => <h1>404 - Not found page</h1>} />
    </Switch>
  );
};

export default Routes;
