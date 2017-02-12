const React = require('react');
const {connect} = require('react-redux');
const actions = require('actions');
import {IconButton} from 'IconButton';

export class IconGroup extends React.Component {

  render() {
    console.log('IconGroup props', this.props);

    const {dispatch} = this.props;
    return (
      <div className="ccm-icon-group">
        <IconButton onClick={()=> {
          dispatch(actions.toggleLayerSelector());
        }}/>
        <IconButton iconKey="search" onClick={()=> {
          dispatch(actions.toggleLayerSelector());
        }}/>
      </div>
    );
  }
}
export default connect()(IconGroup);
