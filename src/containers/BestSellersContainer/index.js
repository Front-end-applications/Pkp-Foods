import React from "react";

import { BestSellers, ProductCard } from "../../components";

const products = [
  {
    title: "abc",
    image: "/images/products/Sweets.jpg",
    cost_per_kg: 1520,
    weights: [500, 1000],
    category: "Traditional South Indian",
    desc:
      "An enchanting troika of premium quality whole cashew nuts, jaggery and ghee",
    expiry: 3,
    gluten_free: true,
    vegan: true,
  },
  {
    title: "def",
    image: "/images/products/Sweets.jpg",
    cost_per_kg: 1520,
    weights: [250, 500, 1000],
    category: "Traditional South Indian",
    expiry: 3,
    gluten_free: true,
    vegan: true,
  },
  {
    title: "ghi",
    image: "/images/products/Sweets.jpg",
    cost_per_kg: 1520,
    weights: [250, 500, 1000],
    category: "Traditional South Indian",
    expiry: 3,
    gluten_free: true,
    vegan: true,
  },
  {
    title: "jkl",
    image: "/images/products/Sweets.jpg",
    cost_per_kg: 1520,
    weights: [250, 500, 1000],
    category: "Traditional South Indian",
    expiry: 3,
    gluten_free: true,
    vegan: true,
  },
];

export default function BestSellersContainer() {
  return (
    <BestSellers>
      <BestSellers.Title>Best Sellers</BestSellers.Title>
      <BestSellers.CardContainer>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            to={{
              pathname: `/products/${index}`,
              state: product,
            }}
          >
            <ProductCard.Image src={product.image} />
            <ProductCard.ProductInformation>
              <ProductCard.Title>{product.title}</ProductCard.Title>
              <ProductCard.Price>
                {"₹"}
                {product.cost_per_kg / (1000 / product.weights[0])} {"/ "}
                {product.weights[0]} {"gms"}
              </ProductCard.Price>
            </ProductCard.ProductInformation>
          </ProductCard>
        ))}
      </BestSellers.CardContainer>
    </BestSellers>
  );
}
