var React = require('react');

var SelectorPanel = React.createClass({

  getDefaultProps: function () {
    return {
      panelOpened:"ccmLayerHealth",
      layers: [
        {
          id:"ccmLayerHealth",
          locTypes: [
            {
              id:"pharmacy"
            },
            {
              id:"hospital"
            }
          ]
        },
        {
          id:"ccmLayerEducation",
          locTypes: [
            {
              id:"kinder-garden"
            },
            {
              id:"primary school"
            }
          ]
        }
      ]
    };
  },
  render: function() {
    return (
      <div className="ccm-selector-panel">
        <h3>Selector Panel</h3>
        <form>
          <label htmlFor="health_selector">Salud</label>
          <input type="checkbox" id="health_selector" name="health_selector" value="health" onChange={this.props.onChange}></input>
          <label htmlFor="education_selector">Educación</label>
          <input type="checkbox" id="education_selector" name="education_selector" value="education" onChange={this.props.onChange}></input>
          <label htmlFor="public_services_selector">Servicios públicos</label>
          <input type="checkbox" id="public_services_selector" name="public_services_selector" value="public_services" onChange={this.props.onChange}></input>
        </form>

      </div>
    );
  },


});

module.exports = SelectorPanel;
