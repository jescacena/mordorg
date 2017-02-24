/* global L */
import {CUSTOM_LAYER_ICONS} from 'constants';

export function flyTo(flyToPoint, leafletMap) {
  let leafletPoint = new L.LatLng(flyToPoint.lat, flyToPoint.lon);
  leafletMap.flyTo(leafletPoint, 17);
  const icon = L.AwesomeMarkers.icon(CUSTOM_LAYER_ICONS.default);
  L.marker(leafletPoint, {icon: icon}).addTo(leafletMap);
}
/**
* addActiveLayers
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
    leafletMap.fitBounds(latlngbounds);
  }

}
