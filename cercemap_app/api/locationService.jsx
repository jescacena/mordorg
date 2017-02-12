const axios = require('axios');

const API_URLS = {
  PUBLIC_TRANSPORTS: 'https://raw.githubusercontent.com/jescacena/mordorg/master/cercemap_geojson_source/json/ccpois_public_transports.json',
  SCHOOLS: 'https://raw.githubusercontent.com/jescacena/mordorg/master/cercemap_geojson_source/json/ccpois_schools.json'
};

module.exports = {
  getGeoJsonDataBySubject(subjectId = 'schools') {
    // var encodedLocation = encodeURIComponent(location);
    // var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    let requestUrl = API_URLS[subjectId.toUpperCase()];
    console.log('LocationService requestUrl --->', requestUrl);

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data;
      }
    }, function (res) {
      // throw new Error(res.data);
      console.log('ERROR res-->', res);
      return [];
    });
  }
};
