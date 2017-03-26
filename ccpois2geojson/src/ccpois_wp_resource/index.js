/*Gateway with Ccpois methods for fetching data from PODS in cercepois Wordpress*/
"use strict"
var axios = require('axios');

const WP_CCPOIS_URL = 'http://jesidea.com/cercepois/wp-json/wp/v2/';

class Ccpois_wordpress_gateway {

    _get(requestUrl){
      console.log('retrieving ccpois from ' + requestUrl);
      return axios.get(requestUrl).then(function (res) {
          return res.data;
      }, function (res) {
        throw new Error(res);
      });
    }
   fetchBazaarsCCPS() {
     var url = WP_CCPOIS_URL + "bazaars";
     return this._get(url);

   }
   fetchFoodCCPS() {
     var url = WP_CCPOIS_URL + "food";
     return this._get(url);

   }
   fetchSchoolsCCPS() {
     var url = WP_CCPOIS_URL + "school";
     return this._get(url);

   }
   fetchPoliceCCPS() {
     var url = WP_CCPOIS_URL + "police";
     return this._get(url);
   }
   fetchBanksCCPS() {
     var url = WP_CCPOIS_URL + "banks";
     return this._get(url);
   }
   fetchPublicTransportsCCPS () {
     var url = WP_CCPOIS_URL + "public_transport";
     return this._get(url);
   }
   fetchMunicipalServicesCCPS () {
     var url = WP_CCPOIS_URL + "muniservice";
     return this._get(url);
   }
   fetchHealthCCPS () {
     var url = WP_CCPOIS_URL + "health";
     return this._get(url);
   }
 }

 module.exports = Ccpois_wordpress_gateway;
