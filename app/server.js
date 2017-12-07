const express = require('express');

const app = express();

if(process.env.NODE_ENV === 'development') {
  app.use(express.static('public'));
} else {
  app.use(express.static('dist'));
}

app.listen(3333 ,'10.70.1.155',null,function () {
  console.log("Cercemap app server listening on port 192.168.1.35:3333");
});

// app.listen(3333 ,function () {
//   console.log("Cercemap app server listening on port 3333");
// });
