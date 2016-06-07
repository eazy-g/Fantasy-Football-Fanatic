var m = require('mithril');
var splashPage = module.exports = {};

splashPage.view = function(ctrl){
  return m('.site-wrapper', [
    m('.site-wrapper-inner', [
      m('.cover-container', [
        m('.masthead clearfix', [
          m('.inner', [
            m('h3', {class: "masthead-brand"}, "Fantasy Football Fanatic"),
            m('nav', [
              m('ul.nav masthead-nav', [
                m('li.active', m('a', {href: '#'}, 'Home')),
                m('li', m('a', {href: '#'}, 'Search Players')),
                m('li', m('a', {href: '#'}, 'Contact'))
                ])
              ])
            ])
          ]), //masthead clearfix
        m('.inner cover', [
          m('h1', {class: 'cover-heading'}, 'An aggregatioin of everything you need'),
          m('p', {class: 'lead'}, 'Click below to start pulling news from the most relevant fantasy football sites'),
          m('p.lead', m('a', {href: '#/search', class: 'btn btn-lg btn-default'}, 'Enter'))
          ]),
        m('.mastfoot', [
          m('.inner', [
            m('p', 'Cover template for',
              m('a', {href: 'http://getbootstrap.com'}, 'Bootstrap'), 'by', m('a', {href: 'https://twitter.com/mdo'}, '@mdo'))
            ])
          ]) //.mastfoot
        ])
      ])
    ])
}
