import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Router, Route, Redirect, Switch } from 'react-router'
import { createBrowserHistory } from 'history'




const customHistory = createBrowserHistory()


const style = makeStyles({
  container: {
    background: 'pink'

  }
})

export default function () {

  const classs = style()

  return (
    <div className={classs.container}>
      <Switch></Switch>
    </div>
  )
}