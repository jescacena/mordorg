window.google = {
  maps: {
    LatLng: ()=>{},
    LatLngBounds: ()=>{},
    places: {
      Autocomplete: ()=>{
        return {
          addListener: ()=> {}
        }
      }
    }
  }
};
window.L = {
  LatLng: ()=>{},
  Icon: {
    extend: ()=>{}
  }
};

window.jQuery = require('jQuery');
