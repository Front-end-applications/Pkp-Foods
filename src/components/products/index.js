import React from "react";

import {
  Container,
  Inner,
  Header,
  Title,
  Desc,
  Body,
  MainContentContainer,
  FilterContainer,
  ProductsCardContainer,
  Sort,
  Select,
  Option,
  Button,
} from "./styles/products";

export default function Products({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Products.Header = ({ children, ...restProps }) => {
  return <Header {...restProps}>{children}</Header>;
};

Products.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Products.Desc = ({ children, ...restProps }) => {
  return <Desc {...restProps}>{children}</Desc>;
};

Products.Body = ({ children, ...restProps }) => {
  return <Body {...restProps}>{children}</Body>;
};

Products.MainContentContainer = ({ children, ...restProps }) => {
  return <MainContentContainer {...restProps}>{children}</MainContentContainer>;
};

Products.ProductsCardContainer = ({ children, ...restProps }) => {
  return (
    <ProductsCardContainer {...restProps}>{children}</ProductsCardContainer>
  );
};

Products.FilterContainer = ({ children, ...restProps }) => {
  return <FilterContainer {...restProps}>{children}</FilterContainer>;
};

Products.Sort = ({ children, ...restProps }) => {
  return <Sort {...restProps}>{children}</Sort>;
};

Products.Select = ({ children, ...restProps }) => {
  return <Select {...restProps}>{children}</Select>;
};

Products.Option = ({ children, ...restProps }) => {
  return <Option {...restProps}>{children}</Option>;
};

Products.Button = ({ children, ...restProps }) => {
  return <Button {...restProps}>{children}</Button>;
};
