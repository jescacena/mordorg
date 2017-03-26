/* global L */
import {CUSTOM_LAYER_ICONS, POPUP_OPTIONS, POPUP_TEMPLATE} from 'constants';
const $ = require('jQuery');

// const $ = require('jQuery');

/*
* flyTo: Fly to point and add a marker
* @type method
* @param flyToPoint point (coords) to fly
* @param leafletMap base map
* @param showPoiData data to show in popup
* @returns void
*/
export function flyTo(flyToPoint, leafletMap, showPopupPoiData) {
  let leafletPoint = new L.LatLng(flyToPoint.lat, flyToPoint.lon);
  leafletMap.flyTo(leafletPoint, 17);
  const icon = L.AwesomeMarkers.icon(CUSTOM_LAYER_ICONS.default);
  let marker = L.marker(leafletPoint, {icon: icon});

  if(showPopupPoiData && !$.isEmptyObject(showPopupPoiData)) {
    const context = {
      name: showPopupPoiData.name,
      address: showPopupPoiData.address,
      imageFront: showPopupPoiData.imgUrl,
      gsvLink: showPopupPoiData.gsvLink
    };

    const html = POPUP_TEMPLATE(context);

    marker.bindPopup(html, POPUP_OPTIONS);
  }

  marker.addTo(leafletMap);

  if(showPopupPoiData) {
    marker.openPopup();
  }

  return marker;
}

/*
* addActiveLayers: loop over layers array and add active ones to base map
* @type method
* @returns void
*/
export function addActiveLayers(layers, fitToBounds, leafletMap) {
  let latlngArray = [];

  Object.keys(layers).forEach(function (layerKey) {
    if(layers[layerKey] && layers[layerKey].leafleftLayer && layers[layerKey].show) {
      console.log('MapLayer: Geojson layer to be added:', layers[layerKey].leafleftLayer);

      // Gathering latlng bounds
      let leaflet_layers = layers[layerKey].leafleftLayer._layers;
      Object.keys(leaflet_layers).forEach(function (key) {
        latlngArray.push(leaflet_layers[key]._latlng);
      });

      layers[layerKey].leafleftLayer.addTo(leafletMap);
    } else if(layers[layerKey].leafleftLayer && !layers[layerKey].show) {
      layers[layerKey].leafleftLayer.remove();
    }
  });

  // Fit to bounds to all markers
  if(latlngArray.length>0 && fitToBounds) {
    const latlngbounds = new L.latLngBounds(latlngArray);
    console.log('MapLayer: Fitting to bounds', latlngbounds);
    leafletMap.fitBounds(latlngbounds, {
      paddingTopLeft: [10, 10],
      paddingTopRight: [10, 10]
    });
  }

  //
  leafletMap.on('popupopen', function(e) {
    const marker = e.popup._source;
    console.log('popupopen', marker);
    // debugger;
  //   const lat = marker.feature.geometry.coordinates[1];
  //   const lon = marker.feature.geometry.coordinates[0];
  //   const panorama = new global.google.maps.StreetViewPanorama(
  //       // global.document.getElementById('street-view'),
  //       $('.street-view')[0],
  //       {
  //         position: {lat: lat, lng: lon},
  //         pov: {heading: 165, pitch: 0},
  //         zoom: 1
  //       });
  //
  });

  return leafletMap;

}
