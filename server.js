var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/profiles');

var Profile = require("./ProfileModel");

var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));
app.use(express.static('node_modules'));


app.get('/profiles', function (req, res, next) {
  Profile.find(function (error, profiles) {
    if (error) {
      //console.log(error)
      console.error(error)
      return next(error);
    } else {
      console.log(profiles)
      res.json(profiles);
    }
  });
});

app.post('/profiles', function(req, res, next) {
  var profile = new Profile(req.body);

  profile.save(function(err, profiles) {
    if (err) {
      console.error(err)
      return next(err);
    } else {
      res.json(profiles);
    }
  });
});


app.delete('/profiles/:id', function(req, res, next) {
  // console.log("hadas"+req.params.id);
  Profile.remove({ _id: req.params.id }, function(err, profiles) {
    if (err) {
      console.error(err)
      // return next(err);
    } else {
      res.json(profiles);
    }
  });
});

app.put('/profiles/:id', function(req, res, next) {
  Profile.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true}, function(err, profile) {
    if (err) {
      console.error(err)
      return next(err);
    } else {
      res.send(profile);
    }
  });
});

// error handler to catch 404 and forward to main error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// main error handler
// warning - not for use in production code!
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
});

app.listen('8000', function() {
  console.log("Hackaton baby");
});