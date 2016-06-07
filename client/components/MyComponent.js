var m = require('mithril')
var Playa = require('../models/player')

var Player = module.exports = {}


Player.controller = function (options) {
	var ctrl = this

	ctrl.playa = ''
	ctrl.stats = null
	ctrl.lovehate = null

	console.log("playa", Playa.test)

	ctrl.getInfo = function(e){
	  e.preventDefault()

	  console.log('get info has run')

	  Playa.getInfo(ctrl.playa).then(function(response){
	  	ctrl.stats = response.html
	  })

	  ctrl.getBerry(e)
	}

	ctrl.getBerry = function(e){
		e.preventDefault()

		console.log("berry has run")

		Playa.getBerry(ctrl.playa).then(function(response){
			ctrl.lovehate = response.html
		})
	}
}

Player.view = function (ctrl, options) {
  return m('.my-component', [
    // m('h2', options.title)
    m('h2', ctrl.playa),
    // m('form', { onsubmit: ctrl.getInfo}, [
    m('.container', [
      m('.row', [
        m('.col-lg-6 text-center', [
          m('.input-group', [
            m('input', {type: 'text', class: 'form-control', placeholder: 'Ex. Rob Gronkowski'}),
            m('span', {class: 'input-group-button'}, [
              m('button', {class: 'btn btn-default', type: 'button'}, 'Go!')
              ])
            ]) //.input-group
          ])
        ])
      ]),
      // m('label', "Player name:"),
      // m('input[type=text]', {
      // 	value: ctrl.playa,
      // 	onchange: function(e){ctrl.playa = e.currentTarget.value}
      // }),
      // m('br'),
      // m('button[type=submit', "get")
    	// ]),
    playerView(ctrl),
    berryView(ctrl)
    // m('.playerStuff', m.trust(ctrl.stats))
  	])
}

function playerView (ctrl){

  if(ctrl.stats !== null){
		return m('.playerStuff', [
			m('h2', 'Rotoworld:'),
			m('.roto', m.trust(ctrl.stats))
		])
	}
  else{
  	return m('.playerStuff', [
  		m('h2', 'Accessing Rotoworld, ESPN, etc.')
  		])
  }
}

function berryView (ctrl){
	if(ctrl.lovehate !== null){
		return m('.berry', [
			m('h2', 'Matthew Berry says:'),
			m('.berrydata', m.trust(ctrl.lovehate))
		])
	}
	// else{
	// 	return
	// }
}
