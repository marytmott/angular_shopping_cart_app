var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var morgan = require('morgan');
var apiRouter = express.Router();
var db = require('./models');

app.set('view engine', 'ejs');
app.use(morgan('tiny'));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//for CORS requests
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, PATCH');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
  next();
});

apiRouter.route('/teas')
.get(function(req, res) {
  db.Tea.find({}, function(error, response) {
    res.json(response);
  });
});


//additional crud operations --->
// .post(function(req, res) {
//   db.Tea.create(req.body, function(error, tea) {
//     if (error) {
//       return res.json({error: error.message});
//     }
//     res.json(tea);
//   });
// });

// apiRouter.route('/teas/:teaName')
// .get(function(req, res) {
//   db.Tea.findOne({name: req.params.teaName}, function(error, tea) {
//     if (error) {
//       return res.json({message: "Tea not found in database.", error: error});
//     }
//     res.json(tea);
//   });
// })
// .put(function(req, res) {
//   db.Tea.findOne({name: req.params.teaName}, function(error, tea) {
//     if (error) {
//       return res.json({message: "Tea not found in database.", error: error});
//     }
//     tea.name = req.body.name;
//     tea.ingredients = req.body.ingredients;
//   });
// })


app.use('/api', apiRouter);

app.get('/', function(req, res) {
  res.render('index.ejs');
});

PORT = 3000;

app.listen(PORT, function() {
  console.log('server listening on port ', PORT);
});