const React = require('react');
const {connect} = require('react-redux');
const actions = require('actions');

import { ListGroup, ListGroupItem} from 'react-bootstrap';

import {LAYERLABELS,LAYER_BGCOLORCLASS} from 'constants';


export class PoiList extends React.Component {

  showModalMessage(msg) {
    const {dispatch} = this.props;
    dispatch(actions.setModalMessageText(msg));
    dispatch(actions.showModal());
  }

  onPoiClickHandler(poiObject) {
    console.log('onPoiClickHandler poiObject', poiObject);
    poiObject.active = !poiObject.active;
  }


  /*
  * buildList: loop over layers array and add active ones to list
  * @type method
  * @param {object} layers
  * @returns Array of Features
  */
  // buildPoiList(layers) {
  //   let result = [];
  //
  //   Object.keys(layers).forEach(function (layerKey) {
  //     if(layers[layerKey] && layers[layerKey].leafleftLayer && layers[layerKey].show) {
  //       result = result.concat(layers[layerKey].data);
  //     }
  //   });
  //   return result;
  // }
  buildPoiList(poiArray) {
    let poiArraySorted = poiArray.sort(function(item1,item2) {
      return item1.properties.name.localeCompare(item2.properties.name);
    });
    return poiArraySorted.map((item) => (
                                   <ListGroupItem
                                     key={item.properties.name}
                                     active={ true }
                                     onClick={(event)=> {
                                      //  $(event.target).blur();
                                        this.onPoiClickHandler(item);

                                     }}>
                                     {item.properties.name}
                                     <img src={item.properties.image_front} />
                                   </ListGroupItem>
                                 ));
  }
  /*
  * @method
  * @name buildPoiList
  * loop over layers array and add active ones to list
  * @type method
  * @param {object} layers
  * @returns Array of Features
  */
  buildLayerList(layers) {
    let jsxResult;

    let layerList = [];
    Object.keys(layers).forEach(function (layerKey) {
      if(layers[layerKey] && layers[layerKey].leafleftLayer && layers[layerKey].show) {
        layerList.push({
          title: LAYERLABELS[layerKey.toUpperCase()],
          bgcolor: LAYER_BGCOLORCLASS[layerKey.toUpperCase()],
          active: false,
          data: layers[layerKey].data
        });
      // result = result.concat(layers[layerKey].data);
      }
    });
    jsxResult = layerList.map((item) => (
                              <div key={item.title}>
                                <ListGroupItem
                                  key={item.title}
                                  className={item.bgcolor + ' title'}
                                  active={ item.active }>
                                  <h5>{item.title}</h5>
                                </ListGroupItem>
                                {this.buildPoiList(item.data)}
                              </div>
                           ));

    return (
       <ListGroup>
         {jsxResult}
       </ListGroup>
    );
  }

  render() {

    const {dispatch, layers, showSideNav,poilists} = this.props;

    // const poiArray = this.buildList(layers);
    // console.log('PoiList poiArray', poiArray);

    // const dynamicClassSchools = (layers.schools && layers.schools.show) ? 'icon-decorator schools selected' : 'icon-decorator schools';
    // const dynamicClassFood = (layers.food && layers.food.show) ? 'icon-decorator food selected' : 'icon-decorator food';
    // const dynamicClassHealth = (layers.health && layers.health.show) ? 'icon-decorator health selected' : 'icon-decorator health';
    // const dynamicClassRestaurants = (layers.restaurants && layers.restaurants.show) ? 'icon-decorator restaurants selected' : 'icon-decorator restaurants';
    // const dynamicClassPublicTransports = (layers.public_transports && layers.public_transports.show) ? 'icon-decorator public-transports selected' : 'icon-decorator public-transports';
    // const dynamicClassHotels = (layers.hotels && layers.hotels.show) ? 'icon-decorator hotels selected' : 'icon-decorator hotels';
    // const dynamicClassMunicipalServices = (layers.municipal_services && layers.municipal_services.show) ? 'icon-decorator municipal_services selected' : 'icon-decorator municipal_services';
    // const dynamicClassClothes = (layers.clothes && layers.clothes.show) ? 'icon-decorator clothes selected' : 'icon-decorator clothes';
    // const dynamicClassBazaars = (layers.bazaars && layers.bazaars.show) ? 'icon-decorator bazaars selected' : 'icon-decorator bazaars';
    // const dynamicClassBanks = (layers.banks && layers.banks.show) ? 'icon-decorator banks selected' : 'icon-decorator banks';
    // const dynamicClassPolice = (layers.police && layers.police.show) ? 'icon-decorator police selected' : 'icon-decorator police';

    // let titlePoiList = 'Capa de Pois';
    // let lgiArray = null;
    //
    // if(poiArray && poiArray.length > 0) {
    //   lgiArray = poiArray.map((item) => (
    //                                <ListGroupItem key={item.properties.wpid}
    //                                  active={ true }>{item.properties.name}
    //                                  <img src={item.properties.image_front} />
    //                                </ListGroupItem>
    //                              ));
    // } else {
    //   lgiArray = (<ListGroupItem  active={ true }>No hay puntos de interés seleccionados</ListGroupItem>);
    // }
    //
    // const listgroupInstance = (
    //   <ListGroup>
    //     <ListGroupItem  active={ true }><h3>{titlePoiList}</h3></ListGroupItem>
    //     {lgiArray}
    //   </ListGroup>
    // );

    const listgroupInstance = this.buildLayerList(layers);

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

    const dynamicClass = 'ccm-poi-list ' + ((showSideNav)?'open':'');
    return (
      <div className={dynamicClass}>
        {listgroupInstance}
      </div>
    );
  }
}

PoiList.defaultProps = {
  layers: {},
  showSideNav: false
};

PoiList.propTypes = {
  layers: React.PropTypes.object,
  showSideNav: React.PropTypes.bool,
  poilists: React.PropTypes.object
};

export default connect(
  (state) => {
    return {
      layers: state.layers,
      showSideNav: state.showSideNav,
      poilists: state.poilists

    };
  }
)(PoiList);
