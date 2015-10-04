import React from 'react'
import { Router, Route, Link } from 'react-router'
import base64 from 'js-base64'
import Isvg from 'react-inlinesvg'


class Thanks extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event){
    var mesInit = event.target.value
    var life = base64.Base64.encode(mesInit)
    this.setState({value: life})
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
      <div className="m2">
        <div className="p2 mx-auto" style={outerCard}>
          <div className="clearfix border p2 relative" style={innerCard}>
            <div className="py2 mx-auto" style={bug}>
              <Isvg src="/assets/bug.svg"></Isvg>
            </div>
            <div className="col-10 mx-auto">
              <h2 className="h0-responsive mt2 pb4 mb3 center fancy maroon">Thanks for</h2>
            </div>

            <form>
              <label className="hide">gift</label>
              <input style={formStyle} type="text" className="block field" placeholder="the amazing pair of socks!" defaultValue="" onChange={this.handleChange} />
            </form>

            <div className="right">
              <h6 className="caps fancy maroon left-align">From</h6>
              <h1 className="right-align m0">Your name</h1>
            </div>

          </div>
        </div>
        <Link to={`/1/`+ this.state.value}>See your card</Link>
      </div>
    )
  }
}

export default Thanks
