/* global L */
import {CUSTOM_LAYER_ICONS,
  CUSTOM_SUBTYPE_ICONS,
  POPUP_TEMPLATE,
  POPUP_AREA_TEMPLATE,
  POPUP_OPTIONS} from 'constants';

export function createGeoJsonAreaLayer(data) {
  const onEachFeature = (feature, layer) => {
    if (feature.properties) {
      const context = {
        name: feature.properties.description
      };

      const html = POPUP_AREA_TEMPLATE(context);
      const popup = layer.bindPopup(html);
      layer.on('mouseover', function (e) {
          popup.openPopup();
      });
      layer.on('mouseout', function (e) {
          popup.closePopup();
      })
    }
  };

  return L.geoJSON(data, {
    onEachFeature: onEachFeature
  });
}

export function createGeoJsonLayer(layerId = 'default', data, isFacebookBuiltInBrowser = false) {
  // layerId = layerId || 'default';
  const icon = L.AwesomeMarkers.icon(CUSTOM_LAYER_ICONS[layerId]);

  const onEachFeature = (feature, layer) => {
    if (feature.properties) {
      //Replace base url in image_front if isFacebookBuiltInBrowser
      // const imageFront = (isFacebookBuiltInBrowser)? feature.properties.image_front.replace('') : feature.properties.image_front;
      const context = {
        name: feature.properties.name,
        address: feature.properties.address,
        imageFront: feature.properties.image_front_for_facebook_app,
        // imageFront: feature.properties.image_front,
        imageWidth: (window.innerWidth < 700)? '200':'250',
        tfnos: feature.properties.tfnos,
        gsvLink: feature.properties.google_streetview_link,
        navLink: 'https://www.google.es/maps/dir/Current+Location/'+feature.geometry.coordinates[1] + ',' + feature.geometry.coordinates[0],
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
        console.log("reducersUtils subtype",feature.properties);
        return L.marker(latlng, {icon: subtypeIcon});
      }
      if(feature.properties.tipo) {
        const subtypeIcon = L.AwesomeMarkers.icon(CUSTOM_SUBTYPE_ICONS[feature.properties.tipo]);
        console.log("reducersUtils subtype",feature.properties);
        return L.marker(latlng, {icon: subtypeIcon});
      }
      console.log("reducersUtils icon layerId",layerId);
      return L.marker(latlng, {icon: icon});
    },
    onEachFeature: onEachFeature
  });
}
