import React from 'react'
import { Link } from 'react-router'

class Home extends React.Component{

  render(){
    var cardStyle = {
      borderColor: '#85144b'
    }
    return(
      <div className="container border" style={cardStyle}>
        <div className="sm-col-6 md-col-8 mx-auto px2 mb3">
          <h1 className="h00-responsive fancy maroon mb1">Sendbytes.space</h1>
          <p>Send beautifully goofy, personalized e-cards. Great for random acts of kindess, letting family/friends/coworkers know they're awesome, or clowning. Enjoy.</p>

          <p>If you have any issues, email <a href="mailto:nick@nickbytes.com">Nick</a>.</p>
        </div>

        <div className="sm-col-6 md-col-8 mx-auto px2">
          <h2 className="fancy maroon">Available Cards</h2>
          <ul className="">
            <li><Link to={`/1`}>Thanks for ______</Link></li>
          </ul>
        </div>

        <div className="sm-col-6 md-col-8 mx-auto mt3 px2">
          <h3 className="fancy maroon">How it's made</h3>
          <p>Sendbytes.space is made using React.js, React Router, Webpack, Basscss, ES6, and SVGs from Femmebot's Gutenberg Project. You can view the project on <a href="">Github</a>.</p>
        </div>

        <div className="sm-col-6 md-col-8 mx-auto mt3 px2">
          <h3 className="fancy maroon">Inspiration for project</h3>
          <ul className="list-reset">
            <li><a className="" href="">Naz Hussan's Atelier August #1</a></li>
            <li><a className="" href="">Femmebot's Gutenberg Project</a></li>
            <li><a className="" href="">someecards</a></li>
            <li>My mother</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Home
