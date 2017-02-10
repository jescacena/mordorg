const React = require('react');
const {connect} = require('react-redux');
const actions = require('actions');

import { ListGroup, ListGroupItem} from 'react-bootstrap';


export class LayerList extends React.Component {

  render() {
    const {dispatch, layers, showLayerSelector} = this.props;

    const listgroupInstance = (
      <ListGroup>
        <ListGroupItem
          onClick={()=> {
            dispatch(actions.toggleLayer('schools'));
          }}
          className="icon-decorator schools"
          active={(layers.schools) ? true : false}>Centro educativos</ListGroupItem>
        <ListGroupItem
          onClick={()=> {
            dispatch(actions.toggleLayer('public_transports'));
          }}
          className="icon-decorator public-transports"
          active={(layers.public_transports) ? true : false}>Transporte público</ListGroupItem>
        <ListGroupItem
          onClick={()=> {
            dispatch(actions.toggleLayer('food'));
          }}
          className="icon-decorator food"
          active={(layers.food) ? true : false}>Alimentación</ListGroupItem>
        <ListGroupItem
          onClick={()=> {
            dispatch(actions.toggleLayer('health'));
          }}
          className="icon-decorator health"
          active={(layers.health) ? true : false}>Farmacias y salud</ListGroupItem>
        <ListGroupItem
          onClick={()=> {
            dispatch(actions.toggleLayer('restaurants'));
          }}
          className="icon-decorator restaurants"
          active={(layers.restaurants) ? true : false}>Restaurantes</ListGroupItem>
        <ListGroupItem
          onClick={()=> {
            dispatch(actions.toggleLayer('hotels'));
          }}
          className="icon-decorator hotels"
          active={(layers.hotels) ? true : false}>Alojamiento</ListGroupItem>
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
  layers: {}
};

LayerList.propTypes = {
  layers: React.PropTypes.object
};

export default connect(
  (state) => {
    return {
      layers: state.layers,
      showLayerSelector: state.showLayerSelector
    };
  }
)(LayerList);
