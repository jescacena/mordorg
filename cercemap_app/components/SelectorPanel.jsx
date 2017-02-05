const React = require('react');

export class SelectorPanel extends React.Component {

  getDefaultProps() {
    return {
      panelOpened: 'ccmLayerHealth',
      layers: [
        {
          id: 'ccmLayerHealth',
          locTypes: [
            {
              id: 'pharmacy'
            },
            {
              id: 'hospital'
            }
          ]
        },
        {
          id: 'ccmLayerEducation',
          locTypes: [
            {
              id: 'kinder-garden'
            },
            {
              id: 'primary school'
            }
          ]
        }
      ]
    };
  }
  render() {
    return (
      <div className="ccm-selector-panel">
        <h3>Selector Panel</h3>
        <form>
          <label htmlFor="education_selector">Educación</label>
          <input type="checkbox" id="education_selector"
            name="education_selector"
            value="education" onChange={this.props.onChange} />
          <label htmlFor="public_services_selector">Servicios públicos</label>
          <input type="checkbox" id="public_services_selector"
            name="public_services_selector"
            value="public_services" onChange={this.props.onChange} />
        </form>

      </div>
    );
  }
}

export default SelectorPanel;
