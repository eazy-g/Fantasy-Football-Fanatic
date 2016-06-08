var m = require('mithril')
//
// Global variable for global state (e.g. currentUser)
//
window.App = {}

// Client-side routing

var Playa = require('./components/MyComponent');
var splash = require('./components/splashPage.js');
//
m.route.mode = 'hash'
m.route(document.getElementById('app'), '/', {

  '/': splash,
  '/search': Playa
})
