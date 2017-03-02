/* global module*/
/* eslint-env jasmine*/
const expect = require('expect');
require('globalmocks');
const actions = require('actions');
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const createMockStore = configureMockStore([thunk]);

describe('actions', () => {
  beforeEach(()=> {
  });

  it('should generate SET_MODAL_MESSAGE_TEXT action', ()=> {
    const action = {
      type: 'SET_MODAL_MESSAGE_TEXT',
      modalMessageText: 'Some search text'
    };

    const res = actions.setModalMessageText(action.modalMessageText);

    expect(res).toEqual(action);
  });
  it('should generate SET_CENTER action', () => {
    const action = {
      type: 'SET_CENTER',
      lat: 1,
      lon: 2,
      zoom: 3
    };

    const res = actions.setCenter(action.lat, action.lon, action.zoom);

    expect(res).toEqual(action);
  });
  it('should generate SET_FLYTO_POINT action', () => {
    const action = {
      type: 'SET_FLYTO_POINT',
      lat: 1,
      lon: 2,
      zoom: 3
    };

    const res = actions.setFlyToPoint(action.lat, action.lon, action.zoom);

    expect(res).toEqual(action);
  });
  it('should generate REMOVE_FLYTO_POINT action', () => {
    const action = {
      type: 'REMOVE_FLYTO_POINT'
    };
    const res = actions.removeFlyToPoint();
    expect(res).toEqual(action);
  });
  it('should generate SET_FIT_TO_BOUNDS action', () => {
    const action = {
      type: 'SET_FIT_TO_BOUNDS'
    };
    const res = actions.setFitToBounds();
    expect(res).toEqual(action);
  });
  it('should generate REMOVE_FIT_TO_BOUNDS action', () => {
    const action = {
      type: 'REMOVE_FIT_TO_BOUNDS'
    };
    const res = actions.removeFitToBounds();
    expect(res).toEqual(action);
  });
  it('should generate TOGGLE_LAYER_SELECTOR action', () => {
    const action = {
      type: 'TOGGLE_LAYER_SELECTOR'
    };
    const res = actions.toggleLayerSelector();
    expect(res).toEqual(action);
  });
  it('should generate TOGGLE_SEARCH_BOX action', () => {
    const action = {
      type: 'TOGGLE_SEARCH_BOX'
    };
    const res = actions.toggleSearchbox();
    expect(res).toEqual(action);
  });
  it('should generate SHOW_LOADING action', () => {
    const action = {
      type: 'SHOW_LOADING'
    };
    const res = actions.showLoading();
    expect(res).toEqual(action);
  });
  it('should generate HIDE_LOADING action', () => {
    const action = {
      type: 'HIDE_LOADING'
    };
    const res = actions.hideLoading();
    expect(res).toEqual(action);
  });
  it('should generate SHOW_MODAL action', () => {
    const action = {
      type: 'SHOW_MODAL'
    };
    const res = actions.showModal();
    expect(res).toEqual(action);
  });
  it('should generate HIDE_MODAL action', () => {
    const action = {
      type: 'HIDE_MODAL'
    };
    const res = actions.hideModal();
    expect(res).toEqual(action);
  });

  it('should generate SET_LAYER_DATA action', () => {
    const action = {
      type: 'SET_LAYER_DATA',
      layerId: 1,
      data: [{pepe: 'pepe'}]
    };

    const res = actions.setLayerData(action.layerId, action.data);

    expect(res).toEqual(action);
  });
  it('should generate SET_SEARCH_TEXT action', ()=> {
    const action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };

    const res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });
  it('should generate TOGGLE_LAYER action', ()=> {
    const action = {
      type: 'TOGGLE_LAYER',
      layerId: 'schools'
    };

    const res = actions.toggleLayer(action.layerId);

    expect(res).toEqual(action);
  });

  describe('START_TOGGLE_LAYER action', ()=> {
    it('should get layer data of unloaded layer  and dispatch TOGGLE_LAYER action', (done)=> {
        const store = createMockStore({layers: {}});

        const action = actions.startToggleLayer('schools');

        store.dispatch(action).then(()=> {

          setTimeout(function () {
            const mockActions = store.getActions();

            expect(mockActions).toInclude({
              type: 'TOGGLE_LAYER',
              layerId: 'schools'
            });

            expect(mockActions).toInclude({
              type: 'SET_LAYER_DATA'
            }, (item1,item2)=> {
              return item1.type === item2.type;
            });
            //
            expect(mockActions).toInclude({
              type: 'HIDE_LOADING'
            });

            done();
          }, 10);

        }, done);
    });
  });
});
