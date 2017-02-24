const React = require('react');
const {connect} = require('react-redux');
const actions = require('actions');

import { ListGroup, ListGroupItem} from 'react-bootstrap';

export class LayerList extends React.Component {

  showModalMessage(msg) {
    const {dispatch} = this.props;
    dispatch(actions.setModalMessageText(msg));
    dispatch(actions.showModal());
  }

  onClickHandler(layerKey) {
    const {dispatch} = this.props;
    dispatch(actions.showLoading());
    dispatch(actions.startToggleLayer(layerKey));
    dispatch(actions.setFitToBounds());
  }

  render() {
    console.log('LayerList props', this.props);

    const {dispatch, layers, showLayerSelector} = this.props;

    const listgroupInstance = (
      <ListGroup>
        <ListGroupItem
          onClick={()=> {
            $(event.target).blur();
            this.onClickHandler('schools');
          }}
          className="icon-decorator schools"
          active={(layers.schools && layers.schools.show) ? true : false}>Centros educativos</ListGroupItem>
        <ListGroupItem
          onClick={(event)=> {
            $(event.target).blur();
            this.onClickHandler('public_transports');
          }}
          className="icon-decorator public-transports"
          active={(layers.public_transports && layers.public_transports.show) ? true : false}>Transporte público</ListGroupItem>
        <ListGroupItem
          onClick={(event)=> {
            $(event.target).blur();
            //this.onClickHandler('food');
            this.showModalMessage('Datos aún no disponibles');
          }}
          className="icon-decorator food"
          active={(layers.food && layers.food.show) ? true : false}>Alimentación</ListGroupItem>
        <ListGroupItem
          onClick={(event)=> {
            $(event.target).blur();
            this.onClickHandler('health');
          }}
          className="icon-decorator health"
          active={(layers.health && layers.health.show) ? true : false}>Farmacias y salud</ListGroupItem>
        <ListGroupItem
          onClick={(event)=> {
            $(event.target).blur();
            // this.onClickHandler('restaurants');
            this.showModalMessage('Datos aún no disponibles');
          }}
          className="icon-decorator restaurants"
          active={(layers.restaurants && layers.restaurants.show) ? true : false}>Restaurantes</ListGroupItem>
        <ListGroupItem
          onClick={(event)=> {
            $(event.target).blur();
            // this.onClickHandler('hotels');
            this.showModalMessage('Datos aún no disponibles');
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
