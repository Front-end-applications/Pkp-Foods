import React from "react";

import { Products, ProductCard, Filter } from "../components";

const products = [
  {
    title: "kaju Pak",
    image: "",
    cost_per_kg: 1520,
    weights: [250, 500, 1000],
    category: "Traditional South Indian",
    expiry: 3,
    gluten_free: true,
    vegan: true,
  },
  {
    title: "kaju Pak",
    image: "",
    cost_per_kg: 1520,
    weights: [250, 500, 1000],
    category: "Traditional South Indian",
    expiry: 3,
    gluten_free: true,
    vegan: true,
  },
  {
    title: "kaju Pak",
    image: "",
    cost_per_kg: 1520,
    weights: [250, 500, 1000],
    category: "Traditional South Indian",
    expiry: 3,
    gluten_free: true,
    vegan: true,
  },
];

export default function ProductsContainer() {
  return (
    <Products>
      <Products.FilterContainer>
        <Filter>
          <Filter.Title>Filter by</Filter.Title>
        </Filter>
      </Products.FilterContainer>

      <Products.ProductsCardContainer>
        {products.map((product, index) => (
          <ProductCard key={index}>
            <ProductCard.Image src="/images/products/Sweets.jpg" />
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
      </Products.ProductsCardContainer>
    </Products>
  );
}
