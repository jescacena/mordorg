var React = require('react');

var SelectorPanel = require('SelectorPanel');
var Legend = require('Legend');
var SearchBox = require('SearchBox');
var MapLayer = require('MapLayer');


var CerceMapContainer = React.createClass({
  getInitialState: function () {
    return {};
  },
  handleSelectorChange: function(event) {
    var layersSelected = this.state.layersSelected || [];
    layersSelected.push(event.target.value);
    this.setState({
      layersSelected:layersSelected,
      layersSerialized: JSON.stringify(layersSelected)
    });
    console.log("state-->" ,this.state );

  },
  render: function() {
    return (
      <div className="ccm-container">
        <MapLayer layersSerialized={this.state.layersSerialized}/>
        <SelectorPanel onChange={this.handleSelectorChange}/>
        <Legend/>
        <SearchBox/>
      </div>
    );
  }
});

module.exports = CerceMapContainer;
