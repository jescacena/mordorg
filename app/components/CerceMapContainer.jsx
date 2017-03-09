const React = require('react');

import SelectorPanel from 'SelectorPanel';
// import Legend from 'Legend';
import LoadingSpinner from 'LoadingSpinner';
import ModalMessage from 'ModalMessage';
import MapLayer from 'MapLayer';
import Logo from 'Logo';
import Footer from 'Footer';
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
        <Logo />
        <MapLayer />
        <SelectorPanel />
        <Footer />
        <LoadingSpinner />
        <ModalMessage />
      </div>
    );
  }
}

export default CerceMapContainer;
