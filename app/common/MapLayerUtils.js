/* global L */
import {CUSTOM_LAYER_ICONS,
  POPUP_OPTIONS,
  POPUP_TEMPLATE,
  POPUP_LOCATE_ADDRESS_IN_AREA} from 'constants';
const $ = require('jQuery');

// const $ = require('jQuery');

/*
* flyTo: Fly to point and add a marker
* @type method
* @param flyToPoint point (coords) to fly
* @param leafletMap base map
* @param showPopupPoiData data to show in popup
* @param showPopupLocateAddressInAreaData data to show in popup
* @returns void
*/
export function flyTo(flyToPoint,
                      leafletMap,
                      showPopupPoiData,
                      locateAddressInAreaData) {
  let leafletPoint = new L.LatLng(flyToPoint.lat, flyToPoint.lon);
  leafletMap.flyTo(leafletPoint, 17);
  const icon = L.AwesomeMarkers.icon(CUSTOM_LAYER_ICONS.default);
  let marker = L.marker(leafletPoint, {icon: icon});

  if(showPopupPoiData && !$.isEmptyObject(showPopupPoiData)) {
    const context = {
      name: showPopupPoiData.name,
      address: showPopupPoiData.address,
      tfnos: showPopupPoiData.tfnos,
      website: showPopupPoiData.website,
      imageFront: showPopupPoiData.imgUrl,
      imageWidth: (window.innerWidth < 700)? '200':'250',
      gsvLink: showPopupPoiData.gsvLink,
      navLink: showPopupPoiData.navLink
    };

    const html = POPUP_TEMPLATE(context);

    marker.bindPopup(html, POPUP_OPTIONS);
  }

  if(locateAddressInAreaData && locateAddressInAreaData.data) {
    const context = {
      message: locateAddressInAreaData.data.message
    };

    const html = POPUP_LOCATE_ADDRESS_IN_AREA(context);

    marker.bindPopup(html, POPUP_OPTIONS);
  }

  marker.addTo(leafletMap);

  if(showPopupPoiData || locateAddressInAreaData) {
    marker.openPopup();
  }

  return marker;
}

/*
* addActivePoiLists: loop over poilists array and add active ones to base map
* @type method
* @returns void
*/
export function addActivePoiLists(poilists, fitToBounds, leafletMap) {
  let latlngArray = [];

  Object.keys(poilists).forEach(function (poilistKey) {
    if(poilists[poilistKey] && poilists[poilistKey].leafleftLayer && poilists[poilistKey].show) {
      console.log('MapLayer: Geojson poilist to be added:', poilists[poilistKey].data);

      // Gathering latlng bounds
      let leaflet_layers = poilists[poilistKey].leafleftLayer._layers;
      Object.keys(leaflet_layers).forEach(function (key) {
        latlngArray.push(leaflet_layers[key]._latlng);
      });

      poilists[poilistKey].leafleftLayer.addTo(leafletMap);
    } else if(poilists[poilistKey].leafleftLayer && !poilists[poilistKey].show) {
      poilists[poilistKey].leafleftLayer.remove();
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

}

/*
* plainPolygonData: convert geojson data in linestring array to polygon
* @type method
* @returns void
*/
export function getPolygon(linestringArray) {
  console.log("JES getPolygon", linestringArray);
  let result =
  {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "Polygon",
            "coordinates": [[]]
          }
        }
      ]
    };

  for(let item of linestringArray) {
    for(let coord of item.geometry.coordinates) {
      result.features[0].geometry.coordinates[0].push(coord);
    }
  }

  return result;
}

/*
* addMarkers: loop over markers array and add them to base map
* @type method
* @returns void
*/
export function addMarkers(markers, leafletMap) {
  const icon = L.AwesomeMarkers.icon(CUSTOM_LAYER_ICONS['default']);

  for(let marker of markers) {
    L.marker(marker, {icon: icon}).addTo(leafletMap);
  }
}

/*
* addActiveAreas: loop over areas array and add active ones to base map
* @type method
* @returns void
*/
export function addActiveAreas(areas, leafletMap) {
  Object.keys(areas).forEach(function (areaId) {
    if(areas[areaId] && areas[areaId].leafleftLayer && areas[areaId].show) {
      console.log('MapLayer: Geojson area to be added:', areas[areaId].leafleftLayer);

      // Gathering latlng bounds
      // let leaflet_layers = layers[layerKey].leafleftLayer._layers;
      // Object.keys(leaflet_layers).forEach(function (key) {
      //   latlngArray.push(leaflet_layers[key]._latlng);
      // });

      areas[areaId].leafleftLayer.addTo(leafletMap);
    } else if(areas[areaId].leafleftLayer && !areas[areaId].show) {
      areas[areaId].leafleftLayer.remove();
    }
  });
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
