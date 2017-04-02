const React = require('react');

export class IconButton extends React.Component {
  render() {
    const {iconKey, onClick, glowing} = this.props;
    const dynamicClass = 'icon-button ' + iconKey + ((glowing)? ' glowing':'');
    return (
      <div className={dynamicClass} alt="icon" onClick={onClick}/>
      // <i className="fa fa-times" />
    );
  }
}
IconButton.propTypes = {
  iconKey: React.PropTypes.string,
  onClick: React.PropTypes.func,
  glowing: React.PropTypes.bool
};
IconButton.defaultProps = {
  iconKey: 'layers',
  onClick: function () {},
  glowing: false
};
export default IconButton;
