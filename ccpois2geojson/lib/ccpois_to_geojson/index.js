/*Gateway with Ccpois methods for fetching data from PODS in cercepois Wordpress*/
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ccpois_to_geojson = function () {
  function Ccpois_to_geojson() {
    _classCallCheck(this, Ccpois_to_geojson);
  }

  _createClass(Ccpois_to_geojson, [{
    key: "convertToFeatureCollection",
    value: function convertToFeatureCollection(data) {
      var resultGeoJSON = data.map(function (item) {
        var latlonArray = item.latlon.split(',');
        return {
          "type": "Feature",
          "properties": {
            "name": item.nombre,
            "type": item.type,
            "nature": item.naturaleza,
            "subtype": item.subtipo ? item.subtipo[0] : null,
            "address": item.direccion,
            "image_front": item.image_front ? item.image_front.guid : "",
            "tfnos": item.tfnos,
            "google_streetview_link": item.google_streetview_link,
            "website": item.website,
            "opening_time": item.horario
          },
          "geometry": {
            "type": "Point",
            "coordinates": [parseFloat(latlonArray[1]), parseFloat(latlonArray[0])]
          }
        };
      });

      // console.log(resultGeoJSON);
      var featureCollection = {
        "type": "FeatureCollection",
        "features": resultGeoJSON
      };
      return featureCollection;
    }
  }]);

  return Ccpois_to_geojson;
}();

module.exports = Ccpois_to_geojson;