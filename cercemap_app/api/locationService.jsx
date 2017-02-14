const axios = require('axios');
import {API_URLS, API_NO_LAYER_DATA_MESSAGE} from 'constants';


module.exports = {
  getGeoJsonDataBySubject(subjectId = 'schools') {
    // var encodedLocation = encodeURIComponent(location);
    // var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    let requestUrl = API_URLS[subjectId.toUpperCase()] || API_NO_LAYER_DATA_MESSAGE;
    console.log('LocationService requestUrl --->', requestUrl);

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
