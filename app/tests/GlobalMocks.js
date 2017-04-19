const L = require('leaflet');

window.VERSION = '0.0.0';

window.google = {
  maps: {
    LatLng: ()=>{},
    LatLngBounds: ()=>{},
    places: {
      Autocomplete: ()=>{
        return {
          addListener: ()=> {}
        }
      }
    }
  }
};
window.L = L;

window.L.GeometryUtil = require('leaflet-geometryutil');


window.L.AwesomeMarkers = {};

window.L.AwesomeMarkers.version = '2.0.1';

window.L.AwesomeMarkers.Icon = window.L.Icon.extend({
    options: {
        iconSize: [35, 45],
        iconAnchor:   [17, 42],
        popupAnchor: [1, -32],
        shadowAnchor: [10, 12],
        shadowSize: [36, 16],
        className: 'awesome-marker',
        prefix: 'glyphicon',
        spinClass: 'fa-spin',
        extraClasses: '',
        icon: 'home',
        markerColor: 'blue',
        iconColor: 'white'
    },

    initialize: function (options) {
        options = L.Util.setOptions(this, options);
    },

    createIcon: function () {
        var div = document.createElement('div'),
            options = this.options;

        if (options.icon) {
            div.innerHTML = this._createInner();
        }

        if (options.bgPos) {
            div.style.backgroundPosition =
                (-options.bgPos.x) + 'px ' + (-options.bgPos.y) + 'px';
        }

        this._setIconStyles(div, 'icon-' + options.markerColor);
        return div;
    },

    _createInner: function() {
        var iconClass, iconSpinClass = "", iconColorClass = "", iconColorStyle = "", options = this.options;

        if(options.icon.slice(0,options.prefix.length+1) === options.prefix + "-") {
            iconClass = options.icon;
        } else {
            iconClass = options.prefix + "-" + options.icon;
        }

        if(options.spin && typeof options.spinClass === "string") {
            iconSpinClass = options.spinClass;
        }

        if(options.iconColor) {
            if(options.iconColor === 'white' || options.iconColor === 'black') {
                iconColorClass = "icon-" + options.iconColor;
            } else {
                iconColorStyle = "style='color: " + options.iconColor + "' ";
            }
        }

        return "<i " + iconColorStyle + "class='" + options.extraClasses + " " + options.prefix + " " + iconClass + " " + iconSpinClass + " " + iconColorClass + "'></i>";
    },

    _setIconStyles: function (img, name) {
        var options = this.options,
            size = L.point(options[name === 'shadow' ? 'shadowSize' : 'iconSize']),
            anchor;

        if (name === 'shadow') {
            anchor = L.point(options.shadowAnchor || options.iconAnchor);
        } else {
            anchor = L.point(options.iconAnchor);
        }

        if (!anchor && size) {
            anchor = size.divideBy(2, true);
        }

        img.className = 'awesome-marker-' + name + ' ' + options.className;

        if (anchor) {
            img.style.marginLeft = (-anchor.x) + 'px';
            img.style.marginTop  = (-anchor.y) + 'px';
        }

        if (size) {
            img.style.width  = size.x + 'px';
            img.style.height = size.y + 'px';
        }
    },

    createShadow: function () {
        var div = document.createElement('div');

        this._setIconStyles(div, 'shadow');
        return div;
  }
});

window.L.AwesomeMarkers.icon = function (options) {
    return new window.L.AwesomeMarkers.Icon(options);
};


window.jQuery = require('jQuery');

window.jQuery('div#map2').remove();
window.jQuery(window.document.body).append(window.jQuery('<div id="map2" style="display: none; height: 300px; width: 360px"></div>'));
// if(!llMap) {
// L.map('map').remove();
// window.llMap = new L.map('map');
// } else {
  // console.log('JESSSS llMap-->',L.map('map'));
// }
// window.map2 = L.map('map2').fitWorld();
window.map2 = L.map('map2');
//L.map('map').remove();
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(window.map2);
window.map2.setView(new L.LatLng(40.737, -73.923), 8);

window.polygonData = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -4.065284729003906,
                40.73672207747068
              ],
              [
                -4.046916961669922,
                40.73672207747068
              ],
              [
                -4.046916961669922,
                40.74465591168391
              ],
              [
                -4.065284729003906,
                40.74465591168391
              ],
              [
                -4.065284729003906,
                40.73672207747068
              ]
            ]
          ]
        }
      }
    ]
  };
