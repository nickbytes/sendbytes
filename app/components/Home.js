import React from 'react'
import { Link } from 'react-router'

class Home extends React.Component{
  render(){
    return(
      <div>
        <h1 className="h00-responsive">Sendbytes.space</h1>
        <p>Send beautifully goofy, personalized e-cards.</p>

        <ul className="list-reset">
          <Link to={`/1`}>Your card</Link>
        </ul>
      </div>
    )
  }
}

export default Home
