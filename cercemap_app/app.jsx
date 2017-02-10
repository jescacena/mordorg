const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, hashHistory} = require('react-router');
const {Provider, dispatch} = require('react-redux');
const actions = require('actions');

let store = require('configureStore').configure();
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
require('font-awesome/css/font-awesome.css');

// import CerceMapContainer2 from 'CerceMapContainer2';
import CerceMapContainer from 'CerceMapContainer';

// const actions = require('actions');

const unsubscribe = store.subscribe(() => {
  const currentState = store.getState();
  console.log('Store New state', currentState);
});
// unsubscribe();


// App css
require('style!css!sass!applicationStyles');

// store.dispatch(actions.setSearchText('Recoge la colada'));
// store.dispatch(actions.toggleLayer('schools'));


ReactDOM.render(
  <Provider store = {store}>
    <Router history={hashHistory}>
      <Route path="/" component={CerceMapContainer} />
      <Route path="/layer/:layerid" component={CerceMapContainer} />
    </Router>
  </Provider>,
  document.getElementById('app')
);
