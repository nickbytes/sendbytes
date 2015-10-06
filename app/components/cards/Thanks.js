import React from 'react'
import { Router, Route, Link } from 'react-router'
import base64 from 'js-base64'
import Isvg from 'react-inlinesvg'


class Thanks extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      value: 'ZWF0aW5nIHRoZSBsYXN0IHBpZWNlIG9mIGJpcnRoZGF5IGNha2Uu',
      msend: 'eating the last piece of birthday cake.',
      cardFrom: 'Nick',
      fromEnc: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleName = this.handleName.bind(this)
  }
  handleChange(event){
    var mesInit = event.target.value
    var life = base64.Base64.encode(mesInit)
    this.setState({value: life, msend: mesInit })
  }
  handleName(event){
    var nameFr = event.target.value
    var fromEncPre = base64.Base64.encode(nameFr)
    this.setState({fromEnc: fromEncPre, cardFrom: nameFr})
  }
  render(){
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
    var formStyle = {
      backgroundColor: 'transparent',
      border: 'none',
      fontFamily: 'Neuton',
      fontSize: '36px',
      color: '#85144b',
      height: '1.5em'
    }
    return(
      <div>
        <div>
          <form>
            <label className="block h3 bold fancy">1. Your Message</label>
            <textarea onChange={this.handleChange} defaultValue="eating the last piece of birthday cake."></textarea>

            <label className="block h3 bold fancy">2. From</label>
            <input type="text" className="block field" placeholder="Nick" onChange={this.handleName}/>
          </form>
        </div>
        <div className="m2">
          <h3 className="fancy">3. Preview</h3>
          <div className="p2 mx-auto" style={outerCard}>
            <div className="clearfix border p2 relative" style={innerCard}>
              <div className="py2 mx-auto" style={bug}>
                <Isvg src="/assets/bug.svg"></Isvg>
              </div>
              <div className="col-10 mx-auto">
                <h2 className="h0-responsive mt2 pb4 mb3 center fancy maroon">Thanks for <span>{this.state.msend}</span></h2>
              </div>

              <div className="right">
                <h6 className="caps fancy maroon left-align">From</h6>
                <h1 className="right-align m0">{this.state.cardFrom}</h1>
              </div>

            </div>
          </div>
        </div>
        <div>
          <h3 className="fancy">4. Send this link to desired recipient.</h3>
          <small className="block">Don't worry, they'll only see the card.</small>
          <Link to={`/final/1/`+ this.state.value + `/` + this.state.fromEnc}>sendbytes.space/final/1/{this.state.value}/{this.state.fromEnc}</Link>
        </div>
      </div>
    )
  }
}

export default Thanks
