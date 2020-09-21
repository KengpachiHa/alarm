import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import App from './App'
import Game from './game/game'
import Alarm from './alarm/alarm'
import My from './my/my'

const routes = [
  {
    path: "/",
    component: App
  },
  {
    path: "/game",
    component: Game
  },
  {
    path: "/alarm",
    component: Alarm
  },
  {
    path: "/my",
    component: My
  },
];

export default function RouterConfig() {
  return(
    <Router>
      {routes.map((route, idx) => (
        <Route 
          key={idx}
          path={route.path}
          render={props => (
            <route.component {...props} routes={route.routes} />
          )}
        />
      ))}
    </Router>
  )
}