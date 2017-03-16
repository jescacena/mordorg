const React = require('react');
const {connect} = require('react-redux');

import SelectorPanel from 'SelectorPanel';
// import Legend from 'Legend';
import LoadingSpinner from 'LoadingSpinner';
import ModalMessage from 'ModalMessage';
import MapLayer from 'MapLayer';
import Logo from 'Logo';
import Footer from 'Footer';
import { Button } from 'react-bootstrap';
const actions = require('actions');


export class CerceMapContainer extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   layersSelected: [],
    //   layersSerialized: null
    // };
  }
  componentWillMount() {
    let {dispatch} = this.props;
    let poikey = null;
    let layerid = null;

    if(this.props.params && this.props.params.layerid && this.props.params.poikey){
      poikey = this.props.params.poikey;
      layerid = this.props.params.layerid;
      dispatch(actions.startViewPOI(layerid, poikey));
    }
    console.log('JESS componentWillMount poikey', poikey);
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

export default connect()(CerceMapContainer);
