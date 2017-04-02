const React = require('react');
const {connect} = require('react-redux');
const actions = require('actions');
import {IconButton} from 'IconButton';

export class IconGroup extends React.Component {

  componentWillUpdate() {
    console.log('componentWillUpdate IconGroup', this.props);
  }
  render() {
    console.log('IconGroup props', this.props);

    const {dispatch, locateUserPosition} = this.props;
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
        <IconButton iconKey="locate" glowing={locateUserPosition} onClick={()=> {
            dispatch(actions.locateUserPosition());
          }}/>
        <IconButton iconKey="fullscreen" onClick={()=> {
            dispatch(actions.toggleFullScreen());
          }}/>
      </div>
    );
  }
}

IconGroup.propTypes = {
  locateUserPosition: React.PropTypes.bool
};
IconGroup.defaultProps = {
  locateUserPosition: false
};


export default connect(
  (state) => {
    return {
      showSearchbox: state.showSearchbox,
      showLayerSelector: state.showLayerSelector,
      fullScreenMode: state.fullScreenMode,
      locateUserPosition: state.locateUserPosition
    };
  }
)(IconGroup);
