const React = require('react');
const {connect} = require('react-redux');
import {LayerList} from 'LayerList';
import {IconGroup} from 'IconGroup';
// let store = require('configureStore').configure();


export class SelectorPanel extends React.Component {


  componentDidMount() {
  }
  render() {
    console.log('SelectorPanel props', this.props);
    const {dispatch, showLayerSelector, layers} = this.props;

    return (
      <div className="ccm-selector-panel">
        <IconGroup dispatch={dispatch} layers={layers}/>
        <LayerList dispatch={dispatch} layers={layers} showLayerSelector={showLayerSelector}/>
      </div>
    );
  }
}

SelectorPanel.defaultProps = {
  layers: {},
  showLayerSelector: false
};

// SelectorPanel.contextTypes = {
//   store: React.PropTypes.object.isRequired
// };

SelectorPanel.propTypes = {
  layers: React.PropTypes.object,
  showLayerSelector: React.PropTypes.bool
};

export default connect(
  (state) => {
    return {
      layers: state.layers,
      showLayerSelector: state.showLayerSelector
    };
  }
)(SelectorPanel);
