var m = require('mithril');
var splashPage = module.exports = {};

splashPage.view = function(ctrl){
  return m('.site-wrapper', [
    m('.site-wrapper-inner', [
      m('.cover-container', [
        m('.masthead clearfix', [
          m('.inner', [
            m('h3', {class: "masthead-brand"}, "Cover"),
            m('nav', [
              m('ul.nav masthead-nav', [
                m('li.active', m('a', {href: '#'}, 'Home')),
                m('li', m('a', {href: '#'}, 'Features')),
                m('li', m('a', {href: '#'}, 'Contact'))
                ])
              ])
            ])
          ]), //masthead clearfix
        m('.inner cover', [
          m('h1', {class: 'cover-heading'}, 'Cover your page'),
          m('p', {class: 'lead'}, 'Blah blah blahhhhhhhhhh'),
          m('p.lead', m('a', {href: '#', class: 'btn btn-lg btn-default'}, 'Learn more'))
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
