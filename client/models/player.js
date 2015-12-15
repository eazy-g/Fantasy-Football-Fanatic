var m = require('mithril')
// var host = '127.0.0.1'

var Playa = module.exports = {}

Playa.person = null;

Playa.test = 'hi'

Playa.stats = null

Playa.getInfo = function(name){
	// var playaName = name.replace(' ', '_')
	return m.request({
		method: 'POST',
		url: '/players',
		// content-type: 'application/json',
		data: {name: name}
	})
}

Playa.getBerry = function(name){

	return m.request({
		method: 'POST',
		url: '/berry',
		data: {name: name}
	})
}