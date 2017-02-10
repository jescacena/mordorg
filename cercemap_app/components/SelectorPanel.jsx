const React = require('react');
const {connect} = require('react-redux');
import {LayerList} from 'LayerList';
import {IconGroup} from 'IconGroup';
// let store = require('configureStore').configure();


export class SelectorPanel extends React.Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="ccm-selector-panel">
        <IconGroup />
        <LayerList />
      </div>
    );
  }
}

SelectorPanel.defaultProps = {
  layers: {}
};

SelectorPanel.contextTypes = {
  store: React.PropTypes.object.isRequired
};

SelectorPanel.propTypes = {
  layers: React.PropTypes.object
};

export default connect(
  (state) => {
    return {
      layers: state.layers
    };
  }
)(SelectorPanel);
