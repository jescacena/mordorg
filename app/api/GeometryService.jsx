// import {API_URLS, API_NO_LAYER_DATA_MESSAGE, API_AREA_URLS} from 'constants';
const axios = require('axios');
const leafletPip = require('@mapbox/leaflet-pip');
import {CERCEMAP_DISTANCE_SERVICE_URL} from 'constants';


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
  * Get distance in km from Google API Service
  */
  distanceCercemapService(pointFrom, pointTo) {

    let requestUrl = CERCEMAP_DISTANCE_SERVICE_URL;
    requestUrl = requestUrl.replace('@LAT1', pointFrom.lat);
    requestUrl = requestUrl.replace('@LON1', pointFrom.lng);
    requestUrl = requestUrl.replace('@LAT2', pointTo.lat);
    requestUrl = requestUrl.replace('@LON2', pointTo.lng);

    console.log('GeometryService:distanceCercemapService requestUrl --->', requestUrl);
    return axios.get(requestUrl).then(function (res) {
      console.log('GeometryService:distanceCercemapService OK res-->', res);
      if (!res || !res.data) {
        throw new Error('Error fetching distance from Cercemap service');
      } else {
        return res.data.distance;
      }
    }, function (res) {
      // throw new Error(res.data);
      console.log('GeometryService:distanceCercemapService ERROR res-->', res);
      return [];
    });

  },

  /*
  * Get distance in km from Google API Service
  */
  distanceCercemapService2(pointFrom, pointTo) {

    let requestUrl = CERCEMAP_DISTANCE_SERVICE_URL;
    requestUrl = requestUrl.replace('@LAT1', pointFrom.lat);
    requestUrl = requestUrl.replace('@LON1', pointFrom.lng);
    requestUrl = requestUrl.replace('@LAT2', pointTo.lat);
    requestUrl = requestUrl.replace('@LON2', pointTo.lng);

    console.log('GeometryService:distanceCercemapService requestUrl --->', requestUrl);
    return axios.get(requestUrl);
  },

  /*
  * Get closest point to line (point Array)
  * @param map {object} L.Map
  * @param latlngArray {object} point (L.LatLng) Array
  * @param latlng {object} point (L.LatLng)
  * @return distance {number}
  */
  closest(map, latlngArray, latlng) {
    console.log('JESSSS closest latlngArray', latlngArray ,latlng);
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
