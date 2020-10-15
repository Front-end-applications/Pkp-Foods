import React from "react";

import {
  Container,
  Inner,
  FilterContainer,
  ProductsCardContainer,
} from "./styles/products";

export default function Products({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Products.ProductsCardContainer = ({ children, ...restProps }) => {
  return (
    <ProductsCardContainer {...restProps}>{children}</ProductsCardContainer>
  );
};

Products.FilterContainer = ({ children, ...restProps }) => {
  return <FilterContainer {...restProps}>{children}</FilterContainer>;
};
