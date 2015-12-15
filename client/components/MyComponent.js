var m = require('mithril')
var Playa = require('../models/player')

var Player = module.exports = {}


Player.controller = function (options) {
	var ctrl = this

	ctrl.playa = "bra"
	ctrl.stats = null

	console.log("playa", Playa.test)

	ctrl.getInfo = function(e){
	  e.preventDefault()

	  Playa.getInfo().then(function(info){
		console.log("this is the info", info.html)
		ctrl.stats = info.html
		})
	}


}

Player.view = function (ctrl, options) {
  return m('.my-component', [
    // m('h2', options.title)
    m('h2', ctrl.playa),
    m('form', { onsubmit: ctrl.getInfo}, [

      m('label', "Player name:"),
      m('input[type=text]', {
      	value: ctrl.playa,
      	onchange: function(e){ctrl.playa = e.currentTarget.value}
      }),
      m('br'),
      m('button[type=submit', "get")
    	]),

    playerView(ctrl)
    // m('.playerStuff', m.trust(ctrl.stats))
  	])
}

function playerView (ctrl){

  if(ctrl.stats !== null){
		return m('.playerStuff', [
			m('newdiv', m.trust(ctrl.stats))
		])
	}	
  else{
  	return m('.playerStuff', [
  		m('h2', 'testing123')
  		])
  }
}

//m.trust