var React = require('react')

var Thanks = React.createClass({
  getInitialState: function() {
    return {
      value: 'Hello!'
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
          <input type="text" className="block field y-group-item" placeholder="amazing pair of socks!" defaultValue="HelloDefault!" onChange={this.handleChange} />
        </form>



        <h1>{this.state.value}</h1>
      </div>
    )
  }
})

module.exports = Thanks
