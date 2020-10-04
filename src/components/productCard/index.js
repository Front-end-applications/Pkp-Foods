import React from 'react'

import {
    Container,
    Title,
    Image,
    ProductInformation,
    Price
} from './styles/productCard'

export default function ProductCard ({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

ProductCard.Title = function ProductCardTitle ({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

ProductCard.Price = function ProductCardPrice ({ children, ...restProps }) {
    return <Price {...restProps}>{children}</Price>
}

ProductCard.Image = function ProductCardImage ({ children, ...restProps }) {
    return <Image {...restProps}>{children}</Image>
}

ProductCard.ProductInformation = function ProductCardTitle ({ children, ...restProps }) {
    return <ProductInformation {...restProps}>{children}</ProductInformation>
}
