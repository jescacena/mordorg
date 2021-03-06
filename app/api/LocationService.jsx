const axios = require('axios');
import {API_URLS, API_NO_LAYER_DATA_MESSAGE, API_AREA_URLS} from 'constants';


module.exports = {

  /*
  * Get GeoJson data for an area by id
  * @param areaId {string}
  */
  getGeoJsonDataArea(areaId = 'sierra_guadarrama_limits') {
    let requestUrl = API_AREA_URLS[areaId.toUpperCase()] || API_NO_LAYER_DATA_MESSAGE;

    console.log('LocationService:getGeoJsonDataArea requestUrl --->', requestUrl);
    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        if(!res.data.no_layer_data) {
          return res.data;
        }
        // TODO display error messages in the app
        console.log(res.data.no_layer_data);
        return res;
      }
    }, function (res) {
      // throw new Error(res.data);
      console.log('LocationService:getGeoJsonDataArea ERROR res-->', res);
      return [];
    });

  },

  /*
  * Get POD data fpr one CCPOI by id
  * @param ccpoiKey {string}
  */
  getGeoJsonDataById(layerid = 'school', ccpoiKey = '58') {
    // let requestUrl = API_URLS.CERCEPOI_GET_ONE + layerid + '/' + ccpoiKey;

    let requestUrl = API_URLS[layerid.toUpperCase()] || API_NO_LAYER_DATA_MESSAGE;

    console.log('LocationService getGeoJsonDataById --->', layerid, ccpoiKey, requestUrl);
    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        if(!res.data.no_layer_data) {
          //Find ccpoi by wpid
          let poidata;
          for(let poi of res.data.features) {
            if(poi.properties.wpid === parseInt(ccpoiKey)){
              poidata = poi;
            }
          }

          if(poidata) {
            return poidata;
          } else {
            throw new Error('getGeoJsonDataById POI NO ENCONTRADO con el ID:' + ccpoiKey);
          }
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
  },

  /*
  * Get GeoJson data for one poi list
  * @param layerKey {string}
  */
  getGeoJsonDataListByKey(listkey = 'ferreterias') {
    let requestUrl = API_URLS[listkey.toUpperCase()] || API_NO_LAYER_DATA_MESSAGE;
    console.log('LocationService getGeoJsonDataListByKey requestUrl --->', requestUrl);

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
