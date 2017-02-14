/* global L */
import {CUSTOM_LAYER_ICONS, POPUP_TEMPLATE} from 'constants';

export function createGeoJsonLayer(layerId, data) {
  const icon = L.AwesomeMarkers.icon(CUSTOM_LAYER_ICONS[layerId]);

  const onEachFeature = (feature, layer) => {
    if (feature.properties) {
      const popupOptions = {
        maxWidth: '250',
        className: 'ccm-marker-popup'
      };
      const context = {
        name: feature.properties.name,
        address: feature.properties.address,
        imageFront: feature.properties.image_front,
        tfnos: feature.properties.tfnos,
        gsvLink: feature.properties.google_streetview_link,
        website: feature.properties.website
      };

      const html = POPUP_TEMPLATE(context);
      layer.bindPopup(html,popupOptions);
      // layer.bindPopup(feature.properties.popupContent);
    }
  };

  return L.geoJSON(data, {
    pointToLayer: function (geoJsonPoint, latlng) {
      return L.marker(latlng, {icon: icon});
    },
    onEachFeature: onEachFeature
  });
}
