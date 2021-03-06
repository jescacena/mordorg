const React = require('react');
const {connect} = require('react-redux');
// import {LayerList} from 'LayerList';
import {PoiList} from 'PoiList';
// import {IconGroup} from 'IconGroup';
// import {SearchBox} from 'SearchBox';
// let store = require('configureStore').configure();
const actions = require('actions');


export class SidePanel extends React.Component {


  componentDidMount() {
    // console.log('componentWillUpdate SelectorPanel', this.props);
  }

  onClickHandler() {
    const {dispatch} = this.props;
    dispatch(actions.toggleSideNav());
    // dispatch(actions.toggleLayerSelector());
  }


  /*
  * hasAnyLayerSelected
  * Check if there is any layer selected
  * @param {object} layers
  * @param {object} poilists
  * @returns {boolean} true if exist any layer selected
  */
  hasAnyLayerSelected(layers,poilists) {
    let result = false;
    Object.keys(layers).forEach(function (layerKey) {
      if(layers[layerKey] && layers[layerKey].leafleftLayer && layers[layerKey].show) {
        result = true;
      }
    });
    if(!result) {
      Object.keys(poilists).forEach(function (key) {
        if(poilists[key] && poilists[key].leafleftLayer && poilists[key].show) {
          result = true;
        }
      });
    }
    return result;
  }

  render() {
    // console.log('SelectorPanel props', this.props);
    const {dispatch, layers, showSideNav,
      showSidePanelTopScrollArrow,
      showSidePanelBottomScrollArrow,
      poilists} = this.props;
    const dynamicClassButton = (showSideNav) ? 'side-nav icon-decorator left' : 'side-nav icon-decorator right';

    const dynamicToggleButton = (this.hasAnyLayerSelected(layers,poilists))?
            (<button
              className={dynamicClassButton}
              onClick={(event)=> {
                        $(event.target).blur();
                        this.onClickHandler();
                      }}/>)
                      :
                      '';


    return (
      <div className="ccm-side-panel">
        {dynamicToggleButton}

        <PoiList dispatch={dispatch}
          showSideNav={showSideNav}
          showSidePanelTopScrollArrow={showSidePanelTopScrollArrow}
          showSidePanelBottomScrollArrow={showSidePanelBottomScrollArrow}
          poilists={poilists}
          layers={layers}
          />
      </div>
    );
  }
}

SidePanel.defaultProps = {
  layers: {},
  showSideNav: false
  // showLayerSelector: false,
  // showSearchbox: false,
  // locateUserPosition: false
};

// SelectorPanel.contextTypes = {
//   store: React.PropTypes.object.isRequired
// };

SidePanel.propTypes = {
  layers: React.PropTypes.object,
  showSideNav: React.PropTypes.bool,
  showSidePanelTopScrollArrow: React.PropTypes.bool,
  showSidePanelBottomScrollArrow: React.PropTypes.bool,
  poilists: React.PropTypes.object

  // showLayerSelector: React.PropTypes.bool,
  // showSearchbox: React.PropTypes.bool,
  // locateUserPosition: React.PropTypes.bool
};

export default connect(
  (state) => {
    return {
      layers: state.layers,
      showSideNav: state.showSideNav,
      showSidePanelTopScrollArrow: state.showSidePanelTopScrollArrow,
      showSidePanelBottomScrollArrow: state.showSidePanelBottomScrollArrow,
      poilists: state.poilists

      // showLayerSelector: state.showLayerSelector,
      // showSearchbox: state.showSearchbox,
      // locateUserPosition: state.locateUserPosition
    };
  }
)(SidePanel);
