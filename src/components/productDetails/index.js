import React from 'react'

import { Container, Inner } from './styles/productDetails'

export default function ProductDetails({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}