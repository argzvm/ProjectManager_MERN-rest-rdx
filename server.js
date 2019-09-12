const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys.js');

// database
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, {useNewUrlParser: true, useCreateIndex: true})
.then( () => console.log("database connected") )
.catch( (err) => console.error(err) );

// app init
const app = express();
app.use(express.json());

// CORS Access-Control-Allow-Origin
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// routes
app.use('/', require('./routes/routes.js'));

// serve static assets in production
if (process.env.NODE_ENV === 'production') {
    app.use( express.static('client/build') );
    app.get( '*', (req, res) => {
        res.sendFile( path.resolve( __dirname, 'client', 'build', 'index.html' ) );
    } );
}

// port listening
app.listen(process.env.PORT || 4000, function(){
    console.log('listening for requests on port 4000');
});
