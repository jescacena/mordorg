const React = require('react');
const {connect} = require('react-redux');
const actions = require('actions');
import {CUSTOM_LAYER_ICONS,
  POPUP_LUIA_TEMPLATE,
  POPUP_LUIA_OPTIONS} from 'constants';

export class LocateUserPositionForm extends React.Component {

  componentDidMount() {
  }

  handleOnUserPositionLocated(userPosition) {
    const {dispatch, areas, locateUserPositionInAreaData, leafletMap} = this.props;

    console.log('LocateUserPositionForm userPosition --->', userPosition);
    // console.log('LocateAddressForm place lat--->', place.geometry.location.lat());
    // console.log('LocateAddressForm place lng --->', place.geometry.location.lng());
    // console.log('LocateAddressForm areas --->', areas);
    // console.log('LocateAddressForm locateAddressInAreaData --->', locateAddressInAreaData);
    // console.log('LocateAddressForm leafletMap --->', leafletMap);

    // window.L.GeometryUtil = require('leaflet-geometryutil');

    const areaLocationArray = areas[locateUserPositionInAreaData.areaId].data.features[0].geometry.coordinates[0];

    //get closest point to area limits
    const pointFrom = L.latLng([userPosition.lat(), userPosition.lng()]);
    console.log('LocateUserPositionForm  lat--->', userPosition.lat());
    console.log('LocateUserPositionForm  lng--->', userPosition.lng());


    MapLayerUtils.calculateDistanceBetweenAreaAndPoint(areaLocationArray, pointFrom, leafletMap).then((response)=> {

      const distanceInKm = response.distance;
      const pointTo = L.latLng([response.closestPoint.lat, response.closestPoint.lng]);
      let polyline = L.polyline([pointFrom, pointTo], {color: 'red',opacity: 0.5});
      const icon = L.AwesomeMarkers.icon(CUSTOM_LAYER_ICONS.default);
      let markerFrom = L.marker(pointFrom, {icon: icon});
      let markerTo = L.marker(pointTo, {icon: icon});
      const distanceLabel = (distanceInKm < 1)? (distanceInKm*1000) + ' m' : distanceInKm + ' km';
      const context = {
        message: 'Tu dirección está a <div class="distance">'+ distanceLabel +' </div> del límite del Parque Nacional'
      };
      const html = POPUP_LUIA_TEMPLATE(context);

      dispatch(actions.setLocateAddressInAreaPointFrom(pointFrom));
      dispatch(actions.setLocateAddressInAreaPointTo(pointTo));

      // create a red polyline from an array of LatLng points
      polyline.addTo(leafletMap);
      markerFrom.addTo(leafletMap);
      markerTo.addTo(leafletMap);
      markerFrom.bindPopup(html, POPUP_LUIA_OPTIONS);
      markerFrom.openPopup();

      // zoom the map to the polyline
      leafletMap.setView(pointFrom, 15);
      leafletMap.fitBounds(polyline.getBounds());

      dispatch(actions.hideLocateAddresInAreaForm());
    });
  }

  render() {
    // console.log('ModalMessage props', this.props);
    const {dispatch, showLocateUserPositionInAreaForm, locateUserPosition} = this.props;
    const show = (showLocateUserPositionInAreaForm)? 'show' : '';
    const dynamicClass = 'ccm-locate-address-form ' + show;
    const dynamicClassButton = 'ccm-selector-panel simple-button ' + ((locateUserPosition)? ' glowing':'');
    const dynamicClassInnerButton = 'icon-button locate ' + ((locateUserPosition)? ' glowing':'');

    return (
      <div className={dynamicClass}>
        <h2>DISTANCIA AL PARQUE NACIONAL DE GUADARRAMA </h2>
        <div className={dynamicClassButton} onClick={()=> {
          dispatch(actions.locateUserPosition());
          }}>
            <div className={dynamicClassInnerButton} alt="icon"/>
            <div className="locate-button-text">LOCALIZA TU POSICI&Oacute;N</div>
        </div>
      </div>
    );
  }
}

LocateUserPositionForm.defaultProps = {
  showLocateUserPositionInAreaForm: false,
  areas: {},
  leafletMap: {},
  locateUserPositionInAreaData: {},
  locateUserPosition: false
};

LocateUserPositionForm.propTypes = {
  showLocateUserPositionInAreaForm: React.PropTypes.bool,
  areas: React.PropTypes.object,
  leafletMap: React.PropTypes.object,
  locateUserPositionInAreaData: React.PropTypes.object,
  locateUserPosition: React.PropTypes.bool

};


export default connect(
  (state) => {
    return {
      showLocateUserPositionInAreaForm: state.showLocateUserPositionInAreaForm,
      areas: state.areas,
      leafletMap: state.leafletMap,
      locateUserPositionInAreaData: state.locateUserPositionInAreaData,
      locateUserPosition: state.locateUserPosition
    };
  }
)(LocateUserPositionForm);
