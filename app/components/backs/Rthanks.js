var React = require('react')
var Router = require('react-router');

var Rthanks = React.createClass({
  mixins: [Router.State],
  getInitialState: function(){
    return{
      giftHelp: ''
    }
  },
  render: function(){
    var giftHelp = this.getParams().gift;
    return(
      <div>
        <h2 className="h00-responsive">Thanks for the {giftHelp}</h2>
      </div>
    )
  }
})

module.exports = Rthanks
