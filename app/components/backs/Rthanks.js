import React from 'react'
import Router from 'react-router'

var Rthanks = React.createClass({
  mixins: [Router.State],
  getInitialState: function(){
    return{
      giftHelp: ''
    }
  },
  render: function(){
    var giftHelp = this.getParams().gift;
    var outerCard = {
      backgroundColor: '#fff8c8'
    }
    var innerCard = {
      minHeight: '400px'
    }
    return(
      <div className="m2 p2" style={outerCard}>
        <div className="border p2" style={innerCard}>
          <h2 className="h00-responsive center">Thanks for the {giftHelp}</h2>
        </div>
      </div>
    )
  }
})

module.exports = Rthanks
