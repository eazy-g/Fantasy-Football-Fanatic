var m = require('mithril')
// var webshot = require('webshot')
// var MyComponent = require('./components/MyComponent')

//
// Global variable for global state (e.g. currentUser)
//
window.App = {}

// webshot('google.com', 'google.png', function(err) {
//   // screenshot now saved to google.png
// })

//
// Client-side routing

var Playa = require('./components/MyComponent');
var splash = require('./components/splashPage.js');
//
m.route.mode = 'hash'
m.route(document.getElementById('app'), '/', {

  '/': splash,
  '/search': Playa
})
