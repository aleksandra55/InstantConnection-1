var express = require('express');
var nodemailer = require('nodemailer');
var app = express();
// app.set('view engine', 'html');
var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "ben@gigaspaces.com",
        pass: "Coucoulol2"
    }
});

var mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTION_STRING||'mongodb://localhost/profiles');

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


/*------------------Routing Started ------------------------*/

app.get('/',function(req,res){
    res.sendfile('localhost:8000/sendmail.html');
});
app.get('/sendmail',function(req,res){
    var mailOptions={
        to : req.query.to,
        subject : req.query.subject,
        text : req.query.text
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
            console.log(error);
        res.end("error");
     }else{
            console.log("Message sent: " + response.message);
        res.end("sent");
         }
});
// res.end("sent");
});

/*--------------------Routing Over----------------------------*/



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
  res.send({
    message: err.message,
    error: err
  });
});







app.listen(process.env.PORT || '8080', function() {
  console.log("Hackaton baby");
});
