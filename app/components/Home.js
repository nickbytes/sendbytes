var React = require('react')

var Home = React.createClass({
  render: function(){
    return(
      <div>
        <h1 className="h00-responsive">Sendbytes.space</h1>
        <p>Send beautifully goofy, personalized e-cards.</p>

        <ul className="list-reset">
          <li><a href="/1">Thank You (Gift)</a></li>
          <li><a href="/2">Graduation</a></li>
        </ul>
      </div>
    )
  }
})

module.exports = Home
