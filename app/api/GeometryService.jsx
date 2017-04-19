// import {API_URLS, API_NO_LAYER_DATA_MESSAGE, API_AREA_URLS} from 'constants';


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
  }
};
