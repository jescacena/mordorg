var Greeter = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello React!</h1>
        <p>Jander clander de todos los santos</p>
      </div>
    );
  }
});

var SelectorPanel = React.createClass({
  render: function() {
    return (
      <div className="ccm-selector-panel">
        <h3>Selector Panel</h3>
      </div>
    );
  }
});

var Legend = React.createClass({
  render: function() {
    return (
      <div className="ccm-legend">
        <h3>Legend</h3>
      </div>
    );
  }
});

var SearchBox = React.createClass({
  render: function() {
    return (
      <div className="ccm-searchbox">
        <h3>SearchBox</h3>
      </div>
    );
  }
});

var CerceMap = React.createClass({
  render: function() {
    return (
      <div className="ccm-container">
        <SelectorPanel/>
        <Legend/>
        <SearchBox/>
      </div>
    );
  }
});

ReactDOM.render(
  <CerceMap/>,
  document.getElementById('app')
);
