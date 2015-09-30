var React = require('react')
var RouteHandler = require('react-router').RouteHandler

var Main = React.createClass({
  render: function(){
    return(
      <div>
          <RouteHandler />
      </div>
    )
  }
})

module.exports = Main
