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
           "address":item.direccion,
           "image_front":(item.image_front)? item.image_front.guid: "",
           "tfnos":item.tfnos,
           "google_streetview_link":item.google_streetview_link,
           "website":item.website
         },
         "geometry": {
           "type": "Point",
           "coordinates": [
             latlonArray[1],
             latlonArray[0]
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
