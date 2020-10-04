import React from 'react'
import { NavBar } from '../components'

export default function NavBarContainer () {
    return (
        <NavBar>
            <NavBar.Link href="#">About us</NavBar.Link>
            <NavBar.Link href="#">Products</NavBar.Link>
            <NavBar.Link href="#">Contact us</NavBar.Link>
            <NavBar.Link href="#">Blog</NavBar.Link>
        </NavBar>
    )
}
