import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import { Board } from '../pages/WebM'

export const Root: React.FC = () => {
  return (
    <Switch>
      <Route path="/b">
        <Board />
      </Route>
      <Redirect exact from="/" to="/b" />
    </Switch>
  )
}