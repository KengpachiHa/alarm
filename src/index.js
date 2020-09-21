import React from 'react';
import { render } from 'react-dom'
import App from './App';
import './style.css'
import { HashRouter as Router } from 'react-router-dom'


// import { Router, Route  } from 'react-router'
// import { createBrowserHistory } from 'history';

// const history = createBrowserHistory();



// render(
//   <Router history={history}>
//     <Route path="/">
//       <App />
//     </Route>
//   </Router>,
//   document.getElementById('root')
// );

render(
  <Router><App /></Router>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
