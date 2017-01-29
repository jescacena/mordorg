/*Gateway with Ccpois methods for fetching data from PODS in cercepois Wordpress*/
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var axios = require('axios');

var WP_CCPOIS_URL = 'http://jesidea.com/cercepois/wp-json/wp/v2/';

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
    key: 'fetchSchoolsCCPS',
    value: function fetchSchoolsCCPS() {
      var url = WP_CCPOIS_URL + "ccpoi_school";
      return this._get(url);
    }
  }, {
    key: 'fetchPublicTransportsCCPS',
    value: function fetchPublicTransportsCCPS() {
      var url = WP_CCPOIS_URL + "ccpoi_public_transpo";
      return this._get(url);
    }
  }]);

  return Ccpois_wordpress_gateway;
}();

module.exports = Ccpois_wordpress_gateway;