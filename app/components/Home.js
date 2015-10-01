import React from 'react'
import { Link } from 'react-router'

class Home extends React.Component{
  render(){
    return(
      <div>
        <h1 className="h00-responsive">Sendbytes.space</h1>
        <p>Send beautifully goofy, personalized e-cards.</p>

        <ul className="list-reset">
          <li><a href="/1">Thank You (Gift)</a></li>
          <Link to={`/1`}>Your card</Link>
          <li><a href="/2">Graduation</a></li>
        </ul>
      </div>
    )
  }
}

export default Home
