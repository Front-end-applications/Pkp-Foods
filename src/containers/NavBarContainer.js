import React from 'react'
import { NavBar } from '../components'

import * as ROUTES from '../constants/routes'

export default function NavBarContainer () {
    return (
      <NavBar>
        <NavBar.Link to={ROUTES.ABOUT_US}>About us</NavBar.Link>
        <NavBar.Link to={ROUTES.PRODUCTS}>Products</NavBar.Link>
        <NavBar.Link to={ROUTES.CONTACT_US}>Contact us</NavBar.Link>
        <NavBar.Link to={ROUTES.BLOG}>Blog</NavBar.Link>
      </NavBar>
    );
}
