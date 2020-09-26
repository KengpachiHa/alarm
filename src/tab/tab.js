import React from 'react'
import { Route } from 'react-router'
import { Switch } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

import Game from '../game/game'
import Alarm from '../alarm/alarm'
import My from '../my/my'
import Nav from '../components/Nav'

const style = makeStyles({
  tab: {
    height: '100%',
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  }
});

function Tab() {
  const styles = style()
  return (
    <div className={styles.tab}>
      <Switch>
        <Route exact path='/'>
          <Alarm />
        </Route>
        <Route path='/games'>
          <Game />
        </Route>
        <Route path='/alarm'>
          <Alarm />
        </Route>
        <Route path='/my'>
          <My />
        </Route>
      </Switch>
      <Nav />
    </div>
  );
}

export default Tab