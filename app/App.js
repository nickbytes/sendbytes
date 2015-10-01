import React from 'react'
import Router from 'react-router'
import routes from './config/routes'
import './styles/stylesheet.css'

Router.run(routes, (Root, state) => {
  React.render(<Root {...state} />, document.getElementById('app'));
})
