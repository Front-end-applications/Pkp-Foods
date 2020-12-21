import React from 'react'
import { Container, Inner, Link } from './styles/navBar'

export default function NavBar ({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}

NavBar.Link = function NavBarLinks ({ children, ...restProps }) {
    return (
        <Link {...restProps}>
            {children}
        </Link>
    )
}
