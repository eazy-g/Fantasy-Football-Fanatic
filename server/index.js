var browserify = require('browserify-middleware')
var express = require('express')
var Path = require('path')
var axios = require('axios')
var cheerio = require('cheerio'), $;

var routes = express.Router()

//
// Provide a browserified file at a specified path
//
routes.get('/app-bundle.js',
  browserify('./client/app.js'))

// var headers = {
//   "access-control-allow-origin": "*",
//   "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
//   "access-control-allow-headers": "content-type, accept",
//   "access-control-max-age": 20 // Seconds.
// };

// routes.options('*', function(req, res){
//   res.set(headers);
//   res.status(201).send(headers);
//   res.end();
// });

// So every request has to be to this endpoint, req will conatin
// Player data
// Example endpoint (also tested in test/server/index_test.js)
//
//req.data

var playerEndpoints = {
  'rob gronkowski': '5729/rob-gronkowski/1',
  'lesean mccoy': '5168/lesean-mccoy',
  'aaron rodgers': '3118/aaron-rodgers',
  'antonio gates': '611/antonio-gates'
}

routes.post('/players', function(req, res) {
  // res.send(['node', 'express', 'browserify', 'mithril'])
  console.log("this is the request", req.body.name)
  var name = req.body.name.toLowerCase();
  var url = playerEndpoints[name]
  axios.get('http://www.rotoworld.com/player/nfl/' + url)
  .then(function(response){
    $ = cheerio.load(response.data)
    // res.send(response.data)
    var myText = $('div .pp').html()
    res.send({ html: myText })
  })
})

routes.post('/berry', function(req, res){
  var name = req.body.name
  axios.get('http://espn.go.com/fantasy/football/story/_/page/TMR151210/matthew-berry-fantasy-football-picks-sleepers-busts-week-14')
  .then(function(response){

    $ = cheerio.load(response.data)

    var myText = $("a:contains(" + name + ")").closest('p').html()
    res.send({html: myText})
  })
})

routes.get('/ranks', function(req, res){
  axios.get('http://espn.go.com/fantasy/football/story/_/page/15ranksWeek14QB/fantasy-football-week-14-quarterback-rankings')
  .then(function(response){

    $ = cheerio.load(response.data)
    var name = 'Aaron Rodgers'
    // var myText = $("a:contains(" + name + ")")
    var myText = $('div .article-body').text()
    res.send(myText)
    // res.send(response.data)
  })
})

//
// Static assets (html, etc.)
//
var assetFolder = Path.resolve(__dirname, '../client/public')
routes.use(express.static(assetFolder))


if (process.env.NODE_ENV !== 'test') {
  //
  // The Catch-all Route
  // This is for supporting browser history pushstate.
  // NOTE: Make sure this route is always LAST.
  //
  routes.get('/', function(req, res){
    res.sendFile(assetFolder + '/index.html')
  })

  routes.get('/*', function(req, res){
    req.url = '..' + req.url;
    console.log('wildcard', req.url);
    console.log('dirname', Path.resolve(__dirname, req.url ));
    res.sendFile(Path.resolve(__dirname, req.url ));
  })

  //
  // We're in development or production mode;
  // create and run a real server.
  //
  var app = express()

  // Parse incoming request bodies as JSON
  app.use( require('body-parser').json() )

  // Mount our main router
  app.use('/', routes)

  // Start the server!
  var port = process.env.PORT || 4000
  app.listen(port)
  console.log("Listening on port", port)
}
else {
  // We're in test mode; make this file importable instead.
  module.exports = routes
}
