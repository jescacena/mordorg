/*Gateway with Ccpois methods for fetching data from PODS in cercepois Wordpress*/
"use strict"

class Ccpois_to_geojson {

   convertToFeatureCollection(data) {
     var resultGeoJSON = data.map((item)=> {
       var latlonArray = item.latlon.split(',');
       return {
         "type": "Feature",
         "properties": {
           "name":item.nombre,
           "type":item.type,
           "address":item.direccion
         },
         "geometry": {
           "type": "Point",
           "coordinates": [
             latlonArray[0],
             latlonArray[1]
           ]
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
 }

 module.exports = Ccpois_to_geojson;
