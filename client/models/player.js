var m = require('mithril')
// var host = '127.0.0.1'

var Playa = module.exports = {}

Playa.person = null;

Playa.test = 'hi'

Playa.getInfo = function(name){
	return m.request({
		method: 'GET',
		url: '/rob_gronkowski'
		// data: {name: name}
	})
};