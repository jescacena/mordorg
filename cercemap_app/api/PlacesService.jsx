
module.exports = {
  addPlacesAutoCompleteListener(htmlInputId, handleNewPlaceSelectedFn) {
    let GPAutocomplete = new global.google.maps.places.Autocomplete(
          (document.getElementById(htmlInputId)),
          {types: ['geocode']});

    GPAutocomplete.addListener('place_changed', ()=> {
      const place = GPAutocomplete.getPlace();
      handleNewPlaceSelectedFn(place);
    });
  }
};
