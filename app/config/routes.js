var React = require('react')
var Main = require('../components/Main')
var Home = require('../components/Home')
var Thanks = require('../components/cards/Thanks')
var College = require('../components/cards/College')
var Router = require('react-router')
var DefaultRoute = Router.DefaultRoute
var Route = Router.Route

module.exports = (
  <Route name="app" path="/" handler={Main}>
    <Route name="thanks" path="1" handler={Thanks} />
    <Route name="college" path="2" handler={College} />
    <DefaultRoute handler={Home} />
  </Route>
)
