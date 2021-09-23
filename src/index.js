import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  BrowserRouter as Router
} from 'react-router-dom'
import './index.css';
import Login from './Login';
import ResultPage from './ResultPage';
import Home from './Home';

ReactDOM.render(
  <Router>
  <Route path='/' exact   component={Home}></Route>
  <Route path='/login' component={Login}></Route>
  <Route path='/result' component={ResultPage}></Route>
  </Router>,
  document.getElementById('root')
);
