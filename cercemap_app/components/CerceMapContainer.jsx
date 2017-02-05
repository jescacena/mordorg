const React = require('react');

import SelectorPanel from 'SelectorPanel';
import Legend from 'Legend';
import SearchBox from 'SearchBox';
import MapLayer from 'MapLayer';

export class CerceMapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layersSelected: [],
      layersSerialized: null
    };
  }
  handleSelectorChange(event) {
    let layersSelected = this.state.layersSelected || [];
    layersSelected.push(event.target.value);
    this.setState({
      layersSelected: layersSelected,
      layersSerialized: JSON.stringify(layersSelected)
    });
    console.log('state-->', this.state);
  }
  render() {
    return (
      <div className="ccm-container">
        <MapLayer layersSerialized={this.state.layersSerialized}/>
        <SelectorPanel onChange={this.handleSelectorChange.bind(this)}/>
        <Legend/>
        <SearchBox/>
      </div>
    );
  }
}

export default CerceMapContainer;
