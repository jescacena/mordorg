const React = require('react');
const {connect} = require('react-redux');
const actions = require('actions');

import { ListGroup, ListGroupItem} from 'react-bootstrap';


export class LayerList extends React.Component {

  render() {
    console.log('LayerList props', this.props);

    const {dispatch, layers, showLayerSelector} = this.props;

    const listgroupInstance = (
      <ListGroup>
        <ListGroupItem
          onClick={()=> {
            dispatch(actions.startToggleLayer('schools'));
          }}
          className="icon-decorator schools"
          active={(layers.schools && layers.schools.show) ? true : false}>Centro educativos</ListGroupItem>
        <ListGroupItem
          onClick={()=> {
            dispatch(actions.startToggleLayer('public_transports'));
          }}
          className="icon-decorator public-transports"
          active={(layers.public_transports && layers.public_transports.show) ? true : false}>Transporte público</ListGroupItem>
        <ListGroupItem
          onClick={()=> {
            dispatch(actions.startToggleLayer('food'));
          }}
          className="icon-decorator food"
          active={(layers.food && layers.food.show) ? true : false}>Alimentación</ListGroupItem>
        <ListGroupItem
          onClick={()=> {
            dispatch(actions.startToggleLayer('health'));
          }}
          className="icon-decorator health"
          active={(layers.health && layers.health.show) ? true : false}>Farmacias y salud</ListGroupItem>
        <ListGroupItem
          onClick={()=> {
            dispatch(actions.startToggleLayer('restaurants'));
          }}
          className="icon-decorator restaurants"
          active={(layers.restaurants && layers.restaurants.show) ? true : false}>Restaurantes</ListGroupItem>
        <ListGroupItem
          onClick={()=> {
            dispatch(actions.startToggleLayer('hotels'));
          }}
          className="icon-decorator hotels"
          active={(layers.hotels && layers.hotels.show) ? true : false}>Alojamiento</ListGroupItem>
      </ListGroup>
    );

    const dynamicClass = 'ccm-layer-list ' + ((showLayerSelector)?'open':'');
    return (
      <div className={dynamicClass}>
        {listgroupInstance}
      </div>
    );
  }
}

LayerList.defaultProps = {
  layers: {},
  showLayerSelector: false
};

LayerList.propTypes = {
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
)(LayerList);
