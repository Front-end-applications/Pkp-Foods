import React from "react";

import { Container, Inner, Title, CardContainer } from "./styles/bestSellers";

export default function BestSellers({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

BestSellers.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

BestSellers.CardContainer = ({ children, ...restProps }) => {
  return <CardContainer {...restProps}>{children}</CardContainer>;
};