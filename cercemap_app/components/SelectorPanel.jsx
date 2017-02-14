const React = require('react');
const {connect} = require('react-redux');
import {LayerList} from 'LayerList';
import {IconGroup} from 'IconGroup';
import {SearchBox} from 'SearchBox';
// let store = require('configureStore').configure();


export class SelectorPanel extends React.Component {


  componentDidMount() {
  }
  render() {
    console.log('SelectorPanel props', this.props);
    const {dispatch, showLayerSelector, showSearchbox, layers} = this.props;

    return (
      <div className="ccm-selector-panel">
        <IconGroup dispatch={dispatch} layers={layers}/>
        <LayerList dispatch={dispatch} layers={layers} showLayerSelector={showLayerSelector}/>
        <SearchBox dispatch={dispatch} showSearchbox={showSearchbox}/>
      </div>
    );
  }
}

SelectorPanel.defaultProps = {
  layers: {},
  showLayerSelector: false,
  showSearchbox: false
};

// SelectorPanel.contextTypes = {
//   store: React.PropTypes.object.isRequired
// };

SelectorPanel.propTypes = {
  layers: React.PropTypes.object,
  showLayerSelector: React.PropTypes.bool,
  showSearchbox: React.PropTypes.bool
};

export default connect(
  (state) => {
    return {
      layers: state.layers,
      showLayerSelector: state.showLayerSelector,
      showSearchbox: state.showSearchbox
    };
  }
)(SelectorPanel);
