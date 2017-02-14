var fs = require('fs');

"use strict";
var Ccpois_wordpress_gateway = require('./ccpois_wp_resource/index.js');
var Ccpois_to_geojson = require('./ccpois_to_geojson/index.js');

var Ccpois_wordpress_resource = new Ccpois_wordpress_gateway();
var Ccpois_to_geojson = new Ccpois_to_geojson();

var _saveFile = (data, filename) => {

  fs.writeFile(filename, JSON.stringify(data), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log(`The file ${filename} was saved!`);
  });

};

Ccpois_wordpress_resource.fetchPublicTransportsCCPS().then((data) => {
  _saveFile(Ccpois_to_geojson.convertToFeatureCollection(data), './json/ccpois_public_transports.json');
});
Ccpois_wordpress_resource.fetchSchoolsCCPS().then((data) => {
  _saveFile(Ccpois_to_geojson.convertToFeatureCollection(data), './json/ccpois_schools.json');
});
Ccpois_wordpress_resource.fetchHealthCCPS().then((data) => {
  _saveFile(Ccpois_to_geojson.convertToFeatureCollection(data), './json/ccpois_health.json');
});
