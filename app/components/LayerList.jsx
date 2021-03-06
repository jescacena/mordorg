const React = require('react');
const {connect} = require('react-redux');
const actions = require('actions');

import { ListGroup, ListGroupItem} from 'react-bootstrap';

import {LAYERLABELS} from 'constants';

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
    // console.log('LayerList props', this.props);

    const {dispatch, layers, showLayerSelector} = this.props;

    const dynamicClassSchools = (layers.schools && layers.schools.show) ? 'icon-decorator schools selected' : 'icon-decorator schools';
    const dynamicClassFood = (layers.food && layers.food.show) ? 'icon-decorator food selected' : 'icon-decorator food';
    const dynamicClassHealth = (layers.health && layers.health.show) ? 'icon-decorator health selected' : 'icon-decorator health';
    const dynamicClassRestaurants = (layers.restaurants && layers.restaurants.show) ? 'icon-decorator restaurants selected' : 'icon-decorator restaurants';
    const dynamicClassPublicTransports = (layers.public_transports && layers.public_transports.show) ? 'icon-decorator public-transports selected' : 'icon-decorator public-transports';
    const dynamicClassHotels = (layers.hotels && layers.hotels.show) ? 'icon-decorator hotels selected' : 'icon-decorator hotels';
    const dynamicClassMunicipalServices = (layers.municipal_services && layers.municipal_services.show) ? 'icon-decorator municipal_services selected' : 'icon-decorator municipal_services';
    const dynamicClassClothes = (layers.clothes && layers.clothes.show) ? 'icon-decorator clothes selected' : 'icon-decorator clothes';
    const dynamicClassBazaars = (layers.bazaars && layers.bazaars.show) ? 'icon-decorator bazaars selected' : 'icon-decorator bazaars';
    const dynamicClassBanks = (layers.banks && layers.banks.show) ? 'icon-decorator banks selected' : 'icon-decorator banks';
    const dynamicClassPolice = (layers.police && layers.police.show) ? 'icon-decorator police selected' : 'icon-decorator police';

    const listgroupInstance = (
      <ListGroup>

        <ListGroupItem
          onClick={(event)=> {
            $(event.target).blur();
            this.onClickHandler('municipal_services');
          }}
          className={dynamicClassMunicipalServices}
          active={(layers.municipal_services && layers.municipal_services.show) ? true : false}>{LAYERLABELS.MUNICIPAL_SERVICES}</ListGroupItem>

        <ListGroupItem
          onClick={()=> {
            $(event.target).blur();
            this.onClickHandler('schools');
          }}
          className={dynamicClassSchools}
          active={(layers.schools && layers.schools.show) ? true : false}>{LAYERLABELS.SCHOOLS}</ListGroupItem>

        <ListGroupItem
          onClick={(event)=> {
            $(event.target).blur();
            //this.onClickHandler('food');
            // this.showModalMessage('Datos aún no disponibles');
            this.onClickHandler('food');
          }}
          className={dynamicClassFood}
          active={(layers.food && layers.food.show) ? true : false}>{LAYERLABELS.FOOD}</ListGroupItem>

        <ListGroupItem
          onClick={(event)=> {
            $(event.target).blur();
            this.onClickHandler('health');
          }}
          className={dynamicClassHealth}
          active={(layers.health && layers.health.show) ? true : false}>{LAYERLABELS.HEALTH}</ListGroupItem>

        <ListGroupItem
          onClick={(event)=> {
            $(event.target).blur();
            // this.onClickHandler('restaurants');
            // this.showModalMessage('Datos aún no disponibles');
            this.onClickHandler('clothes');

          }}
          className={dynamicClassClothes}
          active={(layers.clothes && layers.clothes.show) ? true : false}>{LAYERLABELS.CLOTHES}</ListGroupItem>

        <ListGroupItem
          onClick={(event)=> {
            $(event.target).blur();
            // this.onClickHandler('hotels');
            // this.showModalMessage('Datos aún no disponibles');
            this.onClickHandler('banks');
          }}
          className={dynamicClassBanks}
          active={(layers.banks && layers.banks.show) ? true : false}>{LAYERLABELS.BANKS}</ListGroupItem>

        <ListGroupItem
          onClick={(event)=> {
            $(event.target).blur();
            // this.onClickHandler('hotels');
            // this.showModalMessage('Datos aún no disponibles');
            this.onClickHandler('police');
          }}
          className={dynamicClassPolice}
          active={(layers.police && layers.police.show) ? true : false}>{LAYERLABELS.POLICE}</ListGroupItem>

        <ListGroupItem
          onClick={(event)=> {
            $(event.target).blur();
            // this.onClickHandler('hotels');
            // this.showModalMessage('Datos aún no disponibles');
            this.onClickHandler('bazaars');
          }}
          className={dynamicClassBazaars}
          active={(layers.bazaars && layers.bazaars.show) ? true : false}>{LAYERLABELS.BAZAARS}</ListGroupItem>


      </ListGroup>
    );

    /*
    // <ListGroupItem
    //   onClick={(event)=> {
    //     $(event.target).blur();
    //     this.showModalMessage('Datos aún no disponibles');
    //
    //     // this.onClickHandler('public_transports');
    //   }}
    //   className={dynamicClassPublicTransports}
    //   active={(layers.public_transports && layers.public_transports.show) ? true : false}>Transporte público</ListGroupItem>
*/

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
