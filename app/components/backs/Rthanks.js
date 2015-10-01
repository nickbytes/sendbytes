import React from 'react'
import Router from 'react-router'
import base64 from 'js-base64'
import Isvg from 'react-inlinesvg'

class Rthanks extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      giftHelp: ''
    }
  }
  render(){
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
          <Isvg src='bug.svg'></Isvg>
        </div>

      </div>
    )
  }
}

export default Rthanks
