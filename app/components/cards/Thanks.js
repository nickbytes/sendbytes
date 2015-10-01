import React from 'react'
import { Router, Route, Link } from 'react-router'


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
    console.log(mesInit)
    this.setState({value: event.target.value})
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
