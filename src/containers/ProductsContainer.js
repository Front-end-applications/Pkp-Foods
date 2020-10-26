import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

import { Products, ProductCard, Filter } from "../components";

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
  {
    title: "mno",
    image: "/images/products/Sweets.jpg",
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
      <Products.Header>
        <Products.Title>Product page title</Products.Title>
        <Products.Desc>Product page description</Products.Desc>
      </Products.Header>

      <Products.Body>
        <Products.FilterContainer>
          <Filter>
            <Filter.Title>Filter by</Filter.Title>
            <Filter.Inner>
              <Filter.FilterCategory>
                <Filter.FilterCategoryTitle>
                  Sub-category
                </Filter.FilterCategoryTitle>
                <Filter.Checkbox name="abc" />
              </Filter.FilterCategory>
              <Filter.FilterCategory>
                <Filter.FilterCategoryTitle>
                  Sub-category
                </Filter.FilterCategoryTitle>
              </Filter.FilterCategory>
              <Filter.FilterCategory>
                <Filter.FilterCategoryTitle>
                  Sub-category
                </Filter.FilterCategoryTitle>
              </Filter.FilterCategory>
            </Filter.Inner>
          </Filter>
        </Products.FilterContainer>

        <Products.MainContentContainer>
          <Products.Sort>
            <Products.Select>
              <Products.Option>Position</Products.Option>
              <Products.Option>Price</Products.Option>
              <Products.Option>Product Name</Products.Option>
              <Products.Option>New</Products.Option>
              <Products.Option>Most Viewed</Products.Option>
              <Products.Option>Best Sellers</Products.Option>
            </Products.Select>
            <Products.Button>
              <FaArrowDown />
            </Products.Button>
          </Products.Sort>
          <Products.ProductsCardContainer>
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
          </Products.ProductsCardContainer>
        </Products.MainContentContainer>
      </Products.Body>
    </Products>
  );
}
