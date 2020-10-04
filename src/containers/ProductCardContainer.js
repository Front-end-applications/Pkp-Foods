import React from 'react'
import { ProductCard } from '../components'

export default function ProductCardContainer () {
    return (
        <ProductCard>
            <ProductCard.Image src="/images/products/Sweets.jpg" />
            <ProductCard.ProductInformation>
                <ProductCard.Title>Kaju Pak</ProductCard.Title>
                <ProductCard.Price>₹380.00 / 250 gms</ProductCard.Price>
            </ProductCard.ProductInformation>
        </ProductCard>
    )
}
