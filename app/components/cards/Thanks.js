var React = require('react')
import { Router, Route, Link } from 'react-router'

var Thanks = React.createClass({
  getInitialState: function() {
    return {
      value: ''
    }
  },
  handleChange: function(event){
    this.setState({value: event.target.value});
  },
  render: function(){
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
})

module.exports = Thanks
