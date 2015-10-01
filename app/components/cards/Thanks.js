import React from 'react'
import { Router, Route, Link } from 'react-router'
import base64 from 'js-base64'


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
    return(
      <div>
        <h2 className="h00-responsive">Thanks for the</h2>
        <form>
          <label className="hide">gift</label>
          <input type="text" className="block field y-group-item" placeholder="amazing pair of socks!" defaultValue="amazing pair of socks!" onChange={this.handleChange} />
        </form>

        <Link to={`/1/`+ this.state.value}>Your card</Link>
      </div>
    )
  }
}

export default Thanks
