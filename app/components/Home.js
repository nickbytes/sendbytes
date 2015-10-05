import React from 'react'
import { Link } from 'react-router'
import FitterHappierText from 'react-fitter-happier-text'

class Home extends React.Component{

  render(){
    var cardStyle = {
      backgroundColor: '#f8f5ec',
      boxShadow: '-2px 2px 3px rgba(0,0,0,0.2)'
    }

    var innerCard ={
      borderColor: '#85144b'
    }
    return(
      <div className="px2 mt2 mb2 lg-mt3 lg-mb3">
        <div className="container38 mx-auto m2 p2" style={cardStyle}>
          <div className="p2 border sm-px3 md-px4" style={innerCard}>
            <div className="mx-auto mb3">
              <h1 className="fancy maroon mb1">Sendbytes.space</h1>
              <p>Send beautifully goofy, personalized e-cards. Great for random acts of kindess, letting family/friends/coworkers know they're awesome, or clowning. Enjoy.</p>
            </div>

            <div className="mx-auto">
              <h2 className="fancy maroon">Available Cards</h2>
              <ul className="">
                <li><Link to={`/1`}>Thanks for ______</Link></li>
              </ul>
            </div>

            <div className="mx-auto mt3">
              <h3 className="fancy maroon">How it's made</h3>
              <p>Sendbytes.space is made using React.js, React Router, Webpack, Basscss, ES6, and SVGs from Femmebot's Gutenberg Project. You can view the project on <a href="">Github</a>.</p>
            </div>

            <div className="mx-auto mt3">
              <h3 className="fancy maroon">Questions?</h3>
              <p>Issues? Want to contribute a card design or code? Email <a href="mailto:nick@nickbytes.com">Nick</a>.</p>
            </div>

            <div className="mx-auto mt3 mb3">
              <h3 className="fancy maroon">Inspiration for project</h3>
              <ul className="list-reset">
                <li><a className="" href="https://nhassan.net/atelier/august-2015/01.html">Naz Hassan's Cards for the Train</a></li>
                <li><a className="" href="http://femmebot.github.io/Gutenberg-SVG/10-2014/index.html">Femmebot's Gutenberg Project</a></li>
                <li><a className="" href="http://www.someecards.com/ecards/all/?sort=popular">someecards</a></li>
                <li>My mother</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
