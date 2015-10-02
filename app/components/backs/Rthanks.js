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
      minHeight: '400px',
      borderColor: '#85144b'
    }
    var bug = {
      opacity: '0.5'
    }
    return(
      <div className="m2 p2" style={outerCard}>
        <div className="clearfix border p2 relative" style={innerCard}>
          <div className="col-4 mx-auto" style={bug}>
            <Isvg src="/assets/bug.svg"></Isvg>
          </div>
          <div className="sm-col md-col-10 lg-col-10">
            <h2 className="h00-responsive center fancy maroon">Thanks for the {giftFinal}</h2>
          </div>

          <div className="absolute bottom-0 right-0 p2">
            <h6 className="caps fancy maroon left-align">From</h6>
            <h1 className="right-align m0">Your name</h1>
          </div>

        </div>
      </div>
    )
  }
})

module.exports = Rthanks
