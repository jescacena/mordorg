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

    const currentLocation = this.props.location.pathname;
    console.log('JESS CerceMapContainer currentLocation', currentLocation);

    if(currentLocation.indexOf('/layer/')!==-1) {
      if(this.props.params && this.props.params.layerid){
        layerid = this.props.params.layerid;
        dispatch(actions.startToggleLayer(layerid));
      }
    } else if(currentLocation.indexOf('/poi/')!==-1) {
      if(this.props.params && this.props.params.layerid && this.props.params.poikey){
        poikey = this.props.params.poikey;
        layerid = this.props.params.layerid;
        dispatch(actions.startViewPOI(layerid, poikey));
      }
    } else {
      // const defaultLayer = 'schools';
      // dispatch(actions.startToggleLayer(defaultLayer));
    }

  }

  render() {

    // dispatch(actions.showLoading());
    console.log('CerceMapContainer render this.props.location.query.fb-->',this.props);
    let invalidate = false;
    if(this.props.location.search.indexOf('fb=1')!==-1) {
      //console.log('JESSSS FB invalidateSize!!');
      // this.refs.map.leafletElement.invalidateSize();
      invalidate = true;
    }

    return (
      <div className="ccm-container">
        <Logo />
        <MapLayer invalidate={invalidate}/>
        <SelectorPanel />
        <Footer />
        <LoadingSpinner />
        <ModalMessage />
      </div>
    );
  }
}

export default connect()(CerceMapContainer);
