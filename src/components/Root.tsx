import React from 'react';
import { Switch, Route } from "react-router-dom";

import { Board } from '../pages/WebM'

export const Root: React.FC = () => {
  return (
    <Switch>
      <Route path="/">
        <Board />
      </Route>
    </Switch>
  )
}