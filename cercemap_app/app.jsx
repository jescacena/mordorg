const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, hashHistory} = require('react-router');
import CerceMapContainer from 'CerceMapContainer';


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={CerceMapContainer} />
    <Route path="/layer/:layerid" component={CerceMapContainer} />
  </Router>,
  document.getElementById('app')
);
