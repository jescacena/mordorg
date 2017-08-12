const React = require('react');
const {connect} = require('react-redux');

import SelectorPanel from 'SelectorPanel';
import SidePanel from 'SidePanel';
// import Legend from 'Legend';
import LoadingSpinner from 'LoadingSpinner';
import ModalMessage from 'ModalMessage';
import LocateAddressForm from 'LocateAddressForm';
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
  // componentWillMount() {
  // }

  render() {

    // dispatch(actions.showLoading());
    // console.log('CerceMapContainer render this.props.location.query.fb-->',this.props);
    const path = this.props.location.pathname;

    return (
      <div className="ccm-container">
        <Logo />
        <MapLayer path={path} />
        <SelectorPanel />
        <Footer />
        <LoadingSpinner />
        <ModalMessage />
        <LocateAddressForm />
      <SidePanel />
      </div>
    );


  }
}

export default connect()(CerceMapContainer);
