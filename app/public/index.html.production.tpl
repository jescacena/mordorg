<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <link rel="shortcut icon" type="image/png" href="img/cercedilla_escudo_favicon.png"/>
    <!-- TODO make icons pending-->
    <link rel="icon" sizes="192x192" href="img/logo-192x192.png">
    <link rel="icon" sizes="128x128" href="img/logo-128x128.png">
    <link rel="apple-touch-icon-precomposed" sizes="192x192" href="img/logo-192x192.png">

    <title>Cercemap App</title>
    <style media="screen">
      #app {
        position: fixed;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        background-color: #709dc3;
      }
    </style>
    <link href="./css/spinner.css" rel="stylesheet">


    <script src="https://use.fontawesome.com/6ff81cb10b.js"></script>

  </head>
  <body>

    <input type="hidden" name="version" id="version" value="{version}"/>

    <div id="app">
      <div class="spinner">
        <div class="loading-text">
          <h3>Cargando mapa</h3>
        </div>
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>
    </div>

    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4hAxLWQYK86JGwSCI3FB4TiuAGRU-ez4&libraries=places"></script>

    <script src="./js/main.[hash].bundle.js"></script>

    <script src="./js/leaflet.awesome-markers.js"></script>

    <script src="./js/leaflet.geometryutil.js"></script>


  </body>
</html>
