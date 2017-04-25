// import {API_URLS, API_NO_LAYER_DATA_MESSAGE, API_AREA_URLS} from 'constants';

const leafletPip = require('@mapbox/leaflet-pip');

module.exports = {

  /*
  * Get distance between two points
  * @param map {object} L.Map
  * @param latlngA {object} point from (L.LatLng)
  * @param latlngB {object} point to (L.LatLng)
  * @return distance {number}
  */
  distance(map, latlngA, latlngB) {
    // console.log('JESSSS L', L.GeometryUtil);
    const result = L.GeometryUtil.distance(map, latlngA, latlngB);
    console.log('GeometryService: distance result --->', result);
    return result;
  },

  /*
  * Get closest point to line (point Array)
  * @param map {object} L.Map
  * @param latlngArray {object} point (L.LatLng) Array
  * @param latlng {object} point (L.LatLng)
  * @return distance {number}
  */
  closest(map, latlngArray, latlng) {
    // console.log('JESSSS L', L.GeometryUtil);
    const result = L.GeometryUtil.closest(map, latlngArray, latlng);
    console.log('GeometryService: closest result --->', result);
    return result;
  },

  /*
  * Point in Polygon
  * @param latlngArray {object} point (L.LatLng) Array
  * @param latlng {object} point (L.LatLng)
  * @return {object} array of L.Polygon objects containing that point
  */
  pointInPolygon(latlng, gjLayer) {
    console.log('JESSSS latlng', latlng);
    console.log('JESSSS gjLayer', gjLayer);
    const result = leafletPip.pointInLayer(latlng, gjLayer);
    console.log('GeometryService: pointInPolygon result length --->', result.length);
    return result;
  }
};
