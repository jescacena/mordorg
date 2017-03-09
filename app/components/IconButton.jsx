const React = require('react');

export class IconButton extends React.Component {
  render() {
    const {iconKey, onClick} = this.props;
    const dynamicClass = 'icon-button ' + iconKey;
    return (
      <div className={dynamicClass} alt="icon" onClick={onClick}/>
      // <i className="fa fa-times" />
    );
  }
}
IconButton.propTypes = {
  iconKey: React.PropTypes.string
};
IconButton.defaultProps = {
  iconKey: 'layers'
};
export default IconButton;
