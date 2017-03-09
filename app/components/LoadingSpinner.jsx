const React = require('react');
const {connect} = require('react-redux');

export class LoadingSpinner extends React.Component {
  render() {
    console.log('LoadingSpinner props', this.props);
    const {showLoading} = this.props;
    const show = (showLoading)? 'show' : '';
    const dynamicClass = 'ccm-loading-spinner ' + show;

    return (
      <div className={dynamicClass}>
        <i className="fa fa-cog fa-spin fa-3x fa-fw" />
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
}

LoadingSpinner.defaultProps = {
  showLoading: false
};

// SelectorPanel.contextTypes = {
//   store: React.PropTypes.object.isRequired
// };

LoadingSpinner.propTypes = {
  showLoading: React.PropTypes.bool
};


export default connect(
  (state) => {
    return {
      showLoading: state.showLoading
    };
  }
)(LoadingSpinner);
