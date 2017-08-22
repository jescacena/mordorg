const React = require('react');
const ReactDOM = require('react-dom');
// const {Route, Router, hashHistory} = require('react-router');
import { HashRouter as Router, Route } from 'react-router-dom';

const {Provider, dispatch} = require('react-redux');
const actions = require('actions');

let store = require('configureStore').configure();
require('font-awesome/css/font-awesome.css');
require('bootstrap/dist/css/bootstrap.css');
require('drmonty-leaflet-awesome-markers/css/leaflet.awesome-markers.css');
require('leaflet/dist/leaflet.css');
// require('leaflet-geometryutil');

const ReactGA = require('react-ga');
ReactGA.initialize('UA-44651404-2');

// import CerceMapContainer2 from 'CerceMapContainer2';
import CerceMapContainer from 'CerceMapContainer';


// const actions = require('actions');

// const version = '<{version}>';
//
// console.log('CERCEMAP v' + version);
console.log("Version: " + VERSION);

const unsubscribe = store.subscribe(() => {
  const currentState = store.getState();
  console.log('Store New state', currentState);
});
// unsubscribe();


// App css
require('style!css!sass!applicationStyles');

// store.dispatch(actions.setSearchText('Recoge la colada'));
// store.dispatch(actions.toggleLayer('schools'));
// <Route path="/layer/:layerid" component={CerceMapContainer} />
// <Route path="/poi/:layerid/:poikey" component={CerceMapContainer} />
// <Route path="/poilist/:listkey" component={CerceMapContainer} />

function logPageView() {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
}

setTimeout(function () {
  ReactDOM.render(
    <Provider store = {store}>
      <Router>
        <div>
          <Route path="/" component={CerceMapContainer} onUpdate={logPageView}/>
        </div>
      </Router>
    </Provider>,
    document.getElementById('app')
  );
}, 1000);
