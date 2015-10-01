import React from 'react'
import Router from 'react-router'
import base64 from 'js-base64'
import Isvg from 'react-inlinesvg'

var Rthanks = React.createClass({
  mixins: [Router.State],
  getInitialState: function(){
    return{
      giftHelp: ''
    }
  },
  render: function(){
    var giftHelp = this.getParams().gift;
    var giftFinal = base64.Base64.decode(giftHelp)
    var outerCard = {
      backgroundColor: '#f8f5ec'
    }
    var innerCard = {
      minHeight: '400px'
    }
    return(
      <div className="m2 p2" style={outerCard}>
        <div className="border p2" style={innerCard}>
          <h2 className="h00-responsive center">Thanks for the {giftFinal}</h2>
        </div>
        <Isvg src='../../assets/bug.svg'></Isvg>
      </div>
    )
  }
})

module.exports = Rthanks
