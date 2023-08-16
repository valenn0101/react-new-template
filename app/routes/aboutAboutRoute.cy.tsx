import React from 'react'
import AboutRoute from './about'

describe('<AboutRoute />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AboutRoute />)
  })
})