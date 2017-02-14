const React = require('react');
const {connect} = require('react-redux');
const actions = require('actions');


export class SearchBox extends React.Component {
  render() {
    const {dispatch, showSearchbox} = this.props;

    const dynamicClass = 'ccm-searchbox ' + ((showSearchbox)?'open':'');

    return (
      <div className={dynamicClass}>
        <div className="input-group">
            <input type="text" className="form-control" placeholder="Search for..." />
            <span className="input-group-btn">
              <button className="btn btn-default" type="button">Go!</button>
            </span>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      showSearchbox: state.showSearchbox
    };
  }
)(SearchBox);
