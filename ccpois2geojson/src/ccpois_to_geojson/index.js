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
           "tipo": (item.tipo)? item.tipo[0] : null,
           "nature":item.naturaleza,
           "subtype": (item.subtipo)? item.subtipo[0] : null,
           "address":item.direccion,
           "image_front_for_facebook_app":(item.image_front)? "https://cercemap.org/img/"+item.image_front.post_title+".png": "",
           "image_front":(item.image_front)? item.image_front.guid: "",
           "tfnos":item.tfnos,
           "google_streetview_link":item.google_streetview_link,
           "website":item.website,
           "opening_time":item.horario
         },
         "geometry": {
           "type": "Point",
           "coordinates": [
             parseFloat(latlonArray[1]),
             parseFloat(latlonArray[0])
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
