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

var Playa = require('./components/MyComponent')
//
m.route.mode = 'pathname'
m.route(document.getElementById('app'), '/', {

  '/': {
    // Controllers are optional
    // controller: function () {},

    view: function (ctrl) {
      return m('.app', [
        m('h1', 'Fantasy Foozball'),
        m.component(Playa, { title: 'Lesean McCoy' })
      ])
    }
  }

})
