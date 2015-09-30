var React = require('react')

var College = React.createClass({
  render: function(){
    return(
      <div>
        <h2 className="h00-responsive">Good luck at college! Don't</h2>
        <form>
          <label class="hide">Helpful advice</label>
          <input type="text" className="block field y-group-item" placeholder="forget to change your sheets!" />
        </form>
      </div>
    )
  }
})

module.exports = College
