const axios = require('axios');
import {API_URLS, API_NO_LAYER_DATA_MESSAGE} from 'constants';


module.exports = {

  /*
  * Get POD data fpr one CCPOI by id
  * @param ccpoiKey {string}
  */
  getCCPoiDataById(layerid = 'school', ccpoiKey = '58') {
    let requestUrl = API_URLS.CERCEPOI_GET_ONE + layerid + '/' + ccpoiKey;
    console.log('LocationService getGeoJsonDataById requestUrl --->', requestUrl);
    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        if(!res.data.no_layer_data) {
          return res.data;
        }
        // TODO mostrar mensaje de error
        console.log(res.data.no_layer_data);
        return res;
      }
    }, function (res) {
      // throw new Error(res.data);
      console.log('ERROR res-->', res);
      return [];
    });
  },

  /*
  * Get GeoJson data for one layer
  * @param layerKey {string}
  */
  getGeoJsonDataBySubject(layerKey = 'schools') {
    // var encodedLocation = encodeURIComponent(location);
    // var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    let requestUrl = API_URLS[layerKey.toUpperCase()] || API_NO_LAYER_DATA_MESSAGE;
    console.log('LocationService getGeoJsonDataBySubject requestUrl --->', requestUrl);

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        if(!res.data.no_layer_data) {
          return res.data;
        }
        // TODO mostrar mensaje de error
        console.log(res.data.no_layer_data);
        return res;
      }
    }, function (res) {
      // throw new Error(res.data);
      console.log('ERROR res-->', res);
      return [];
    });
  }
};
