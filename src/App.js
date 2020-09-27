import React, { Component } from 'react';
import Tab from './tab/tab'
import AddAlarm from './components/AddAlarm'
import { Route } from 'react-router'
import { Switch } from 'react-router-dom'



class App extends Component{
  render() {
    return (
      <div>
        <Switch>
          <Route path='/addOdds'>
            <AddAlarm />
          </Route>

          {/* <Route>
            <Tab></Tab>
          </Route> */}
        </Switch>
        <Tab />
      </div>
    )
  }
} 

export default App