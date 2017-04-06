/* global L */
import {CUSTOM_LAYER_ICONS, CUSTOM_SUBTYPE_ICONS, POPUP_TEMPLATE, POPUP_OPTIONS} from 'constants';

export function createGeoJsonLayer(layerId, data) {
  layerId = layerId || 'default';
  const icon = L.AwesomeMarkers.icon(CUSTOM_LAYER_ICONS[layerId]);

  const onEachFeature = (feature, layer) => {
    if (feature.properties) {
      const context = {
        name: feature.properties.name,
        address: feature.properties.address,
        imageFront: feature.properties.image_front,
        imageWidth: (window.innerWidth < 700)? '200':'250',
        tfnos: feature.properties.tfnos,
        gsvLink: feature.properties.google_streetview_link,
        website: feature.properties.website
      };

      const html = POPUP_TEMPLATE(context);
      layer.bindPopup(html, POPUP_OPTIONS);
      // setTimeout(function () {
      //   var panorama = new google.maps.StreetViewPanorama(
      //       document.getElementById('street-view'),
      //       {
      //         position: {lat: 37.869260, lng: -122.254811},
      //         pov: {heading: 165, pitch: 0},
      //         zoom: 1
      //       });
      // }, 10);
      // layer.bindPopup(feature.properties.popupContent);
    }
  };

  return L.geoJSON(data, {
    pointToLayer: function (feature, latlng) {
      if(feature.properties.subtype) {
        const subtypeIcon = L.AwesomeMarkers.icon(CUSTOM_SUBTYPE_ICONS[feature.properties.subtype]);
        return L.marker(latlng, {icon: subtypeIcon});
      }
      if(feature.properties.tipo) {
        const subtypeIcon = L.AwesomeMarkers.icon(CUSTOM_SUBTYPE_ICONS[feature.properties.tipo]);
        return L.marker(latlng, {icon: subtypeIcon});
      }
      return L.marker(latlng, {icon: icon});
    },
    onEachFeature: onEachFeature
  });
}
