import React from 'react'
import Main from '../components/Main'
import Home from '../components/Home'
import Thanks from '../components/cards/Thanks'
import Rthanks from '../components/backs/Rthanks'
import { Router, DefaultRoute, Route } from 'react-router'

export default (
  <Route name="app" path="/" handler={Main}>
    <Route name="thanks" path="draft/1" handler={Thanks} />
    <Route name="rthanks" path="final/1/:gift" handler={Rthanks} />
    <DefaultRoute handler={Home} />
  </Route>
)
