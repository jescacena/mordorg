const React = require('react');
const {connect} = require('react-redux');
import {LayerList} from 'LayerList';
import {IconGroup} from 'IconGroup';
import {SearchBox} from 'SearchBox';
// let store = require('configureStore').configure();


export class SelectorPanel extends React.Component {


  componentDidMount() {
    console.log('componentWillUpdate SelectorPanel', this.props);

  }
  render() {
    console.log('SelectorPanel props', this.props);
    const {dispatch, showLayerSelector, showSearchbox, locateUserPosition, layers} = this.props;

    return (
      <div className="ccm-selector-panel">
        <IconGroup dispatch={dispatch} layers={layers}
          showLayerSelector={showLayerSelector}
          showSearchbox={showSearchbox}
          locateUserPosition={locateUserPosition}/>
        <LayerList dispatch={dispatch} layers={layers} showLayerSelector={showLayerSelector}/>
        <SearchBox dispatch={dispatch} showSearchbox={showSearchbox}/>
      </div>
    );
  }
}

SelectorPanel.defaultProps = {
  layers: {},
  showLayerSelector: false,
  showSearchbox: false,
  locateUserPosition: false
};

// SelectorPanel.contextTypes = {
//   store: React.PropTypes.object.isRequired
// };

SelectorPanel.propTypes = {
  layers: React.PropTypes.object,
  showLayerSelector: React.PropTypes.bool,
  showSearchbox: React.PropTypes.bool,
  locateUserPosition: React.PropTypes.bool
};

export default connect(
  (state) => {
    return {
      layers: state.layers,
      showLayerSelector: state.showLayerSelector,
      showSearchbox: state.showSearchbox,
      locateUserPosition: state.locateUserPosition
    };
  }
)(SelectorPanel);
