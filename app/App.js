var React = require('react')
var Router = require('react-router')
var routes = require('./config/routes')
require('./styles/stylesheet.css')

Router.run(routes, function(Root){
  React.render(<Root />, document.getElementById('app'));
})
