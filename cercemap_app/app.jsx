var React = require('react');
var ReactDOM = require('react-dom');
var CerceMapContainer = require('CerceMapContainer');


//Ejemplo de ES6
var objOne = {
  name: 'Gerardo',
  location: 'Peñaranda de Bracamonte'
};

var objTwo = {
  age:25,
  ...objOne
};

console.log(objTwo);

ReactDOM.render(
  <CerceMapContainer/>,
  document.getElementById('app')
);
