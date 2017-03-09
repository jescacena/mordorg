const React = require('react');
const {connect} = require('react-redux');
const actions = require('actions');


export class ModalMessage extends React.Component {
  render() {
    console.log('ModalMessage props', this.props);
    const {showModal , modalMessageText} = this.props;
    const show = (showModal)? 'show' : '';
    const dynamicClass = 'ccm-modal-message ' + show;

    return (
      <div className={dynamicClass}>
        <i className="fa fa-large fa-info-circle" aria-hidden="true" />
        <div className="message">
          <h1>{modalMessageText}</h1>
          <button onClick={() => {
            const {dispatch} = this.props;
            dispatch(actions.hideModal());
          }}>Close</button>
        </div>
      </div>
    );
  }
}

ModalMessage.defaultProps = {
  showModal: false,
  modalMessageText: null
};

// SelectorPanel.contextTypes = {
//   store: React.PropTypes.object.isRequired
// };

ModalMessage.propTypes = {
  showModal: React.PropTypes.bool,
  modalMessageText: React.PropTypes.string
};


export default connect(
  (state) => {
    return {
      showModal: state.showModal,
      modalMessageText: state.modalMessageText
    };
  }
)(ModalMessage);
