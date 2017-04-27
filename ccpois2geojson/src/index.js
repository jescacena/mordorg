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

Ccpois_wordpress_resource.fetchBazaarsCCPS().then((data) => {
  _saveFile(Ccpois_to_geojson.convertToFeatureCollection(data), './json/ccpois_bazaars.json');
});
Ccpois_wordpress_resource.fetchFoodCCPS().then((data) => {
  _saveFile(Ccpois_to_geojson.convertToFeatureCollection(data), './json/ccpois_food.json');
});
Ccpois_wordpress_resource.fetchPublicTransportsCCPS().then((data) => {
  _saveFile(Ccpois_to_geojson.convertToFeatureCollection(data), './json/ccpois_public_transports.json');
});
Ccpois_wordpress_resource.fetchSchoolsCCPS().then((data) => {
  _saveFile(Ccpois_to_geojson.convertToFeatureCollection(data), './json/ccpois_schools.json');
});
Ccpois_wordpress_resource.fetchBanksCCPS().then((data) => {
  _saveFile(Ccpois_to_geojson.convertToFeatureCollection(data), './json/ccpois_banks.json');
});
Ccpois_wordpress_resource.fetchHealthCCPS().then((data) => {
  _saveFile(Ccpois_to_geojson.convertToFeatureCollection(data), './json/ccpois_health.json');
});
Ccpois_wordpress_resource.fetchPoliceCCPS().then((data) => {
  _saveFile(Ccpois_to_geojson.convertToFeatureCollection(data), './json/ccpois_police.json');
});
Ccpois_wordpress_resource.fetchClothesCCPS().then((data) => {
  _saveFile(Ccpois_to_geojson.convertToFeatureCollection(data), './json/ccpois_clothes.json');
});
Ccpois_wordpress_resource.fetchMunicipalServicesCCPS().then((data) => {
  _saveFile(Ccpois_to_geojson.convertToFeatureCollection(data), './json/ccpois_muniservice.json');
});
Ccpois_wordpress_resource.fetchPoilistsCCPS().then((dataList) => {
  dataList.forEach(function(list) {
    var filename = 'ccpois_'+list.key;
    _saveFile(Ccpois_to_geojson.convertToFeatureCollection(list.lista), './json/'+filename+'.json');
  });
});
Ccpois_wordpress_resource.fetchPoilistsFoodCCPS().then((dataList) => {
  dataList.forEach(function(list) {
    var filename = 'ccpois_'+list.key;
    _saveFile(Ccpois_to_geojson.convertToFeatureCollection(list.lista), './json/'+filename+'.json');
  });
});

Ccpois_wordpress_resource.fetchPoilistsCultureCCPS().then((dataList) => {
  dataList.forEach(function(list) {
    var filename = 'ccpois_'+list.key;
    _saveFile(Ccpois_to_geojson.convertToFeatureCollection(list.lista), './json/'+filename+'.json');
  });
});
