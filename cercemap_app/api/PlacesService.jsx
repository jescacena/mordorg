
import {CERCE_BOUNDS, CERCE_CENTER} from 'constants';

module.exports = {
  addPlacesAutoCompleteListener(htmlInputId, handleNewPlaceSelectedFn) {
    console.log('CERCE_BOUNDS', CERCE_BOUNDS);
    console.log('CERCE_CENTER', CERCE_CENTER);
    let GPAutocomplete = new global.google.maps.places.Autocomplete(
          (document.getElementById(htmlInputId)),
          {
            // types: ['geocode'],
            bounds: CERCE_BOUNDS,
            strictBounds: true,
            componentRestrictions: {country: 'es'}
          });

    return GPAutocomplete.addListener('place_changed', ()=> {
      const place = GPAutocomplete.getPlace();
      handleNewPlaceSelectedFn(place);
    });
  }
};
