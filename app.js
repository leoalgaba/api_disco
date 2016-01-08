
// Incluimos dependencias
var express = require("express"),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose = require('mongoose'),
    app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/', function(req, res) {
   res.send("Hola mundo");
});

app.use(router);

app.listen(3000, function() {
  console.log("Node server corriendo en http://localhost:3000");
});