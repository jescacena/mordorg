/*Gateway with Ccpois methods for fetching data from PODS in cercepois Wordpress*/
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var axios = require('axios');

var WP_CCPOIS_URL = 'http://jesidea.com/cercepois/wp-json/wp/v2/';
var per_page = 100;

var Ccpois_wordpress_gateway = function () {
  function Ccpois_wordpress_gateway() {
    _classCallCheck(this, Ccpois_wordpress_gateway);
  }

  _createClass(Ccpois_wordpress_gateway, [{
    key: '_get',
    value: function _get(requestUrl) {
      console.log('retrieving ccpois from ' + requestUrl);
      return axios.get(requestUrl).then(function (res) {
        return res.data;
      }, function (res) {
        throw new Error(res);
      });
    }
  }, {
    key: 'fetchBazaarsCCPS',
    value: function fetchBazaarsCCPS() {
      var url = WP_CCPOIS_URL + "bazaars" + "?per_page=" + per_page;
      return this._get(url);
    }
  }, {
    key: 'fetchFoodCCPS',
    value: function fetchFoodCCPS() {
      var url = WP_CCPOIS_URL + "food" + "?per_page=" + per_page;
      return this._get(url);
    }
  }, {
    key: 'fetchSchoolsCCPS',
    value: function fetchSchoolsCCPS() {
      var url = WP_CCPOIS_URL + "school" + "?per_page=" + per_page;
      return this._get(url);
    }
  }, {
    key: 'fetchPoliceCCPS',
    value: function fetchPoliceCCPS() {
      var url = WP_CCPOIS_URL + "police" + "?per_page=" + per_page;
      return this._get(url);
    }
  }, {
    key: 'fetchBanksCCPS',
    value: function fetchBanksCCPS() {
      var url = WP_CCPOIS_URL + "banks" + "?per_page=" + per_page;
      return this._get(url);
    }
  }, {
    key: 'fetchPublicTransportsCCPS',
    value: function fetchPublicTransportsCCPS() {
      var url = WP_CCPOIS_URL + "public_transport" + "?per_page=" + per_page;
      return this._get(url);
    }
  }, {
    key: 'fetchMunicipalServicesCCPS',
    value: function fetchMunicipalServicesCCPS() {
      var url = WP_CCPOIS_URL + "muniservice" + "?per_page=" + per_page;
      return this._get(url);
    }
  }, {
    key: 'fetchHealthCCPS',
    value: function fetchHealthCCPS() {
      var url = WP_CCPOIS_URL + "health" + "?per_page=" + per_page;
      return this._get(url);
    }
  }, {
    key: 'fetchClothesCCPS',
    value: function fetchClothesCCPS() {
      var url = WP_CCPOIS_URL + "clothes" + "?per_page=" + per_page;
      return this._get(url);
    }
  }, {
    key: 'fetchPoilistsCCPS',
    value: function fetchPoilistsCCPS() {
      var url = WP_CCPOIS_URL + "ccpoilist" + "?per_page=" + per_page;
      return this._get(url);
    }
  }, {
    key: 'fetchPoilistsFoodCCPS',
    value: function fetchPoilistsFoodCCPS() {
      var url = WP_CCPOIS_URL + "ccpoilist_food" + "?per_page=" + per_page;
      return this._get(url);
    }
  }, {
    key: 'fetchPoilistsCultureCCPS',
    value: function fetchPoilistsCultureCCPS() {
      var url = WP_CCPOIS_URL + "ccpoilist_culture" + "?per_page=" + per_page;
      return this._get(url);
    }
  }, {
    key: 'fetchTimePubtraTrainCCPS',
    value: function fetchTimePubtraTrainCCPS() {
      var url = WP_CCPOIS_URL + "timepubtra-train-c2" + "?per_page=" + per_page;
      return this._get(url);
    }
  }, {
    key: 'fetchTimePubtraBus684CCPS',
    value: function fetchTimePubtraBus684CCPS() {
      var url = WP_CCPOIS_URL + "timepubtra-684" + "?per_page=" + per_page;
      return this._get(url);
    }
  }]);

  return Ccpois_wordpress_gateway;
}();

module.exports = Ccpois_wordpress_gateway;