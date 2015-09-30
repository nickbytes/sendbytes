var React = require('react')

var Thanks = React.createClass({
  render: function(){
    return(
      <div>
        <h2 className="h00-responsive">Thanks for the</h2>
        <form>
          <label className="hide">gift</label>
          <input type="text" className="block field y-group-item" placeholder="amazing pair of socks!" />
        </form>
      </div>
    )
  }
})

module.exports = Thanks
