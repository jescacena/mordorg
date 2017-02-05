const axios = require('axios');
const PUBLIC_SERVICES_DL = 'https://raw.githubusercontent.com/jescacena/cerceloc/master/public_services.json';


module.exports = {
  getGeoJsonDataBySubject: function () {
    // var encodedLocation = encodeURIComponent(location);
    // var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    let requestUrl = PUBLIC_SERVICES_DL;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
};
