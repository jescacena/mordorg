const React = require('react');
const {connect} = require('react-redux');
const actions = require('actions');
import {IconButton} from 'IconButton';

export class IconGroup extends React.Component {

  render() {
    console.log('IconGroup props', this.props);

    const {dispatch} = this.props;
    const that = this;
    return (
      <div className="ccm-icon-group">
        <IconButton iconKey="layers" onClick={()=> {
          const {showSearchbox} = that.props;
          if(showSearchbox){
            dispatch(actions.toggleSearchbox());
          }
          dispatch(actions.toggleLayerSelector());
        }}/>
        <IconButton iconKey="search" onClick={()=> {
          const {showLayerSelector} = that.props;
          if(showLayerSelector){
            dispatch(actions.toggleLayerSelector());
          }
          dispatch(actions.toggleSearchbox());
        }}/>
        <IconButton iconKey="fullscreen" onClick={()=> {
            dispatch(actions.toggleFullScreen());
          }}/>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      showSearchbox: state.showSearchbox,
      showLayerSelector: state.showLayerSelector,
      fullScreenMode: state.fullScreenMode
    };
  }
)(IconGroup);
