const React = require('react');
const {connect} = require('react-redux');
const actions = require('actions');
const PlacesService = require('PlacesService');
const GeometryService = require('GeometryService');
import {CUSTOM_LAYER_ICONS,
  POPUP_OPTIONS,
  POPUP_TEMPLATE,
  POPUP_LAIA_TEMPLATE,
  POPUP_LAIA_OPTIONS} from 'constants';

export class LocateAddressForm extends React.Component {

  componentDidMount() {
    PlacesService.addPlacesAutoCompleteListener('locate-address-box', this.handleNewPlaceSelected.bind(this));
  }

  handleNewPlaceSelected(place) {
    const {dispatch, areas, locateAddressInAreaData, leafletMap} = this.props;

    // console.log('LocateAddressForm place --->', place);
    // console.log('LocateAddressForm place lat--->', place.geometry.location.lat());
    // console.log('LocateAddressForm place lng --->', place.geometry.location.lng());
    // console.log('LocateAddressForm areas --->', areas);
    // console.log('LocateAddressForm locateAddressInAreaData --->', locateAddressInAreaData);
    // console.log('LocateAddressForm leafletMap --->', leafletMap);

    // window.L.GeometryUtil = require('leaflet-geometryutil');

    const areaLocationArray = areas[locateAddressInAreaData.areaId].data.features[0].geometry.coordinates[0];
    const areaLocationArray2 = [];
    for (let location of areaLocationArray) {
      areaLocationArray2.push([location[1], location[0]]);
    }
    // console.log('LocateAddressForm areaLocationArray2 --->', JSON.stringify(areaLocationArray2));


    //get closest point to area limits
    const pointFrom = L.latLng([place.geometry.location.lat(), place.geometry.location.lng()]);
    const closest = GeometryService.closest(leafletMap, areaLocationArray2, pointFrom);

    if(closest) {
      const pointTo = L.latLng([closest.lat, closest.lng]);

      console.log('LocateAddressForm pointFrom --->', pointFrom);
      console.log('LocateAddressForm pointTo --->', pointTo);

      //Request Google API Distance
      GeometryService.distanceCercemapService(pointFrom, pointTo).then((res) => {

        console.log('LocateAddressForm distance --->', res);
        const distanceInKm = res;


        dispatch(actions.setLocateAddressInAreaPointFrom(pointFrom));
        dispatch(actions.setLocateAddressInAreaPointTo(pointTo));

        // dispatch(actions.renderLine(pointFrom, pointTo));

        // create a red polyline from an array of LatLng points
        const polyline = L.polyline([pointFrom, pointTo], {color: 'red',opacity: 0.5}).addTo(leafletMap);

        // zoom the map to the polyline
        // dispatch(actions.setFlyToPoint(place.geometry.location.lat(),
        //                                 place.geometry.location.lng(), 10));
        const icon = L.AwesomeMarkers.icon(CUSTOM_LAYER_ICONS.default);
        let markerFrom = L.marker(pointFrom, {icon: icon}).addTo(leafletMap);
        // const distanceInKm = Math.round(closest.distance/1000);
        const distanceLabel = (distanceInKm < 1)? (distanceInKm*1000) + ' m' : distanceInKm + ' km';
        const context = {
          message: 'Tu dirección está a <div class="distance">'+ distanceLabel +' </div> del límite del Parque Nacional'
        };

        const html = POPUP_LAIA_TEMPLATE(context);

        markerFrom.bindPopup(html, POPUP_LAIA_OPTIONS);
        markerFrom.openPopup();

        let markerTo = L.marker(pointTo, {icon: icon}).addTo(leafletMap);

        leafletMap.setView(pointFrom, 15);
        leafletMap.fitBounds(polyline.getBounds());
        dispatch(actions.hideLocateAddresInAreaForm());
      });
    } else {
      dispatch(actions.hideLocateAddresInAreaForm());
    }
  }

  render() {
    // console.log('ModalMessage props', this.props);
    const {showLocateAddressInAreaForm} = this.props;
    const show = (showLocateAddressInAreaForm)? 'show' : '';
    const dynamicClass = 'ccm-locate-address-form ' + show;

    return (
      <div className={dynamicClass}>
        <h2>DISTANCIA AL PARQUE NACIONAL DESDE LOCALIZACIONES DE CERCEDILLA</h2>
        <h3>Introduce la dirección a localizar:</h3>
        <div className="input-group">
            <input type="text" id="locate-address-box"
              className="form-control"
              placeholder="Calle ..." />
        </div>
      </div>
    );
  }
}

LocateAddressForm.defaultProps = {
  showLocateAddressInAreaForm: false,
  areas: {},
  leafletMap: {},
  locateAddressInAreaData: {}
};

// SelectorPanel.contextTypes = {
//   store: React.PropTypes.object.isRequired
// };

LocateAddressForm.propTypes = {
  showLocateAddressInAreaForm: React.PropTypes.bool,
  areas: React.PropTypes.object,
  leafletMap: React.PropTypes.object,
  locateAddressInAreaData: React.PropTypes.object
};


export default connect(
  (state) => {
    return {
      showLocateAddressInAreaForm: state.showLocateAddressInAreaForm,
      areas: state.areas,
      leafletMap: state.leafletMap,
      locateAddressInAreaData: state.locateAddressInAreaData
    };
  }
)(LocateAddressForm);
