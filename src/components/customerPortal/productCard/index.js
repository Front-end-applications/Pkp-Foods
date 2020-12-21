import React from "react";

import {
  Container,
  Title,
  Image,
  ProductInformation,
  Price,
} from "./styles/productCard";

export default function ProductCard({ children, ...restProps }) {
  return (
    <Container {...restProps} to={restProps.to}>
      {children}
    </Container>
  );
}

ProductCard.Title = function ProductCardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

ProductCard.Price = function ProductCardPrice({ children, ...restProps }) {
  return <Price {...restProps}>{children}</Price>;
};

ProductCard.Image = function ProductCardImage({ ...restProps }) {
  return <Image {...restProps} />;
};

ProductCard.ProductInformation = function ProductCardTitle({
  children,
  ...restProps
}) {
  return <ProductInformation {...restProps}>{children}</ProductInformation>;
};
