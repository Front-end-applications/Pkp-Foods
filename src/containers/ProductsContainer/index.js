import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

import { Products, ProductCard, Filter } from "../../components";
import { useLocation } from "react-router-dom";

export default function ProductsContainer() {
  const [products, setProducts] = useState([]);
  let category = useLocation().state;

  const fetchProducts = () => {
    axios
      .get("http://localhost:8080/getProductsByFamilyId", {
        params: {
          familyId: category.familyId,
        },
      })
      .then((res) => {
        setProducts(res.data);
      });
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
              <Products.Option>Product Name</Products.Option>
              <Products.Option>Price</Products.Option>
              <Products.Option>New</Products.Option>
              <Products.Option>Most Viewed</Products.Option>
              <Products.Option>Best Sellers</Products.Option>
            </Products.Select>
            <Products.Button>
              <FaArrowDown />
            </Products.Button>
          </Products.Sort>

          <Products.ProductsCardContainer>
            {products.parentArticlesList &&
              products.parentArticlesList.map((product, index) => (
                <ProductCard
                  key={index}
                  to={{
                    pathname: `/products/${index}`,
                    state: {
                      familyId: products.familyId,
                      familyName: products.familyName,
                      familyImage: products.familyImage,
                      ...product,
                    },
                  }}
                >
                  <ProductCard.Image src="/images/products/Sweets.jpg" />
                  <ProductCard.ProductInformation>
                    <ProductCard.Title>{product.productName}</ProductCard.Title>
                    <ProductCard.Price>
                      {console.log(product.childArticlesList[0])}
                      {"₹"}
                      {product.childArticlesList[0].maximumRetailPrice} {"/ "}
                      {product.childArticlesList[0].weight.weight}{" "}
                      {product.childArticlesList[0].weight.unitOfMeasurement}
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
