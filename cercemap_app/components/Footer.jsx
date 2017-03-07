const React = require('react');

export class Footer extends React.Component {
  render() {
    return (
      <div className="ccm-footer">
        <span className="copyright" data-reactid=".0.3.4">

        <a href="https://github.com/jescacena/mordorg/blob/master/LICENSE.txt" target="_blank">
          <img src="img/gplv3-127x51.png" alt="Gnu Public License"/>
          &nbsp;Copyright 2017 © Javier Escacena
        </a>

        </span>
      </div>
    );
  }
}

export default Footer;
