import React from 'react'
import Router from 'react-router'
import base64 from 'js-base64'
import Isvg from 'react-inlinesvg'
import Promo from '../promo/Promo'

var Rthanks = React.createClass({
  mixins: [Router.State],
  getInitialState: function(){
    return{
      giftHelp: ''
    }
  },
  render: function(){
    var giftHelp = this.getParams().gift;
    var nameHelp = this.getParams().nameHelp;
    var giftFinal = base64.Base64.decode(giftHelp)
    var nameFinal = base64.Base64.decode(nameHelp)
    var outerCard = {
      backgroundColor: '#f8f5ec',
      boxShadow: '-2px 2px 3px rgba(0,0,0,0.2)',
      maxWidth: '800px'
    }
    var innerCard = {
      maxHeight: '500px',
      borderColor: '#85144b'
    }
    var bug = {
      opacity: '0.5',
      maxWidth: '100px'
    }
    return(
      <div className="m2">
        <div className="p2 mx-auto" style={outerCard}>
          <div className="clearfix border p2 relative" style={innerCard}>
            <div className="py2 mx-auto" style={bug}>
              <Isvg src="/assets/bug.svg"></Isvg>
            </div>
            <div className="col-10 mx-auto">
              <h2 className="text-sizer mt2 pb4 mb3 center fancy maroon">Thanks for {giftFinal}</h2>
            </div>

            <div className="right">
              <h6 className="caps fancy maroon left-align">From</h6>
              <h1 className="right-align m0 fancy">{nameFinal}</h1>
            </div>

          </div>
        </div>
        <Promo />
      </div>
    )
  }
})

module.exports = Rthanks
