const React = require('react');

import SelectorPanel from 'SelectorPanel';
import Legend from 'Legend';
import SearchBox from 'SearchBox';
import MapLayer from 'MapLayer';
import { Button } from 'react-bootstrap';

export class CerceMapContainer extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   layersSelected: [],
    //   layersSerialized: null
    // };
  }
  render() {
    return (
      <div className="ccm-container">
        <MapLayer />
        <SelectorPanel />
        <Legend/>
      </div>
    );
  }
}

export default CerceMapContainer;
