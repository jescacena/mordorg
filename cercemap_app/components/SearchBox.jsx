const React = require('react');
const PlacesService = require('PlacesService');
const {connect} = require('react-redux');
const actions = require('actions');

export class SearchBox extends React.Component {
  handleNewPlaceSelected(place) {
    const {dispatch} = this.props;

    console.log('PlacesService place --->', place);
    console.log('PlacesService place lat--->', place.geometry.location.lat());
    console.log('PlacesService place lng --->', place.geometry.location.lng());
    dispatch(actions.setFlyToPoint(place.geometry.location.lat(),
                                    place.geometry.location.lng(), 5));

  }
  componentDidMount() {
    PlacesService.addPlacesAutoCompleteListener('searchbox', this.handleNewPlaceSelected.bind(this));
  }
  render() {
    const {showSearchbox} = this.props;

    const dynamicClass = 'ccm-searchbox ' + ((showSearchbox)?'open':'');

    return (
      <div className={dynamicClass}>
        <div className="input-group">
            <input type="text" id="searchbox"
              className="form-control"
              placeholder="Search for..." />
            <span className="input-group-btn">
              <button className="btn btn-default" type="button">Go!</button>
            </span>
        </div>
      </div>
    );
  }
}
SearchBox.propTypes = {
  showSearchbox: React.PropTypes.bool
};

export default connect()(SearchBox);
