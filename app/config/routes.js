import React from 'react'
import Main from '../components/Main'
import Home from '../components/Home'
import Thanks from '../components/cards/Thanks'
import College from '../components/cards/College'
import Rthanks from '../components/backs/Rthanks'
import { Router, DefaultRoute, Route } from 'react-router'

export default (
  <Route name="app" path="/" handler={Main}>
    <Route name="thanks" path="1" handler={Thanks} />
    <Route name="rthanks" path="1/:gift" handler={Rthanks} />
    <Route name="college" path="2" handler={College} />
    <DefaultRoute handler={Home} />
  </Route>
)
