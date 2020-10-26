import React from "react";

import {
  Container,
  Inner,
  Image,
  Details,
  Title,
  Expiry,
  Price,
  Availablity,
  Button,
  WeightsGroup,
  Weights,
  Quantity,
  Desc,
  HorizontalRule,
  PinCode,
  PinCodeButton,
  Input,
} from "./styles/productDetails";

export default function ProductDetails({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

ProductDetails.Image = ({ children, ...restProps }) => {
  return <Image {...restProps} />;
};

ProductDetails.Details = ({ children, ...restProps }) => {
  return <Details {...restProps}>{children}</Details>;
};

ProductDetails.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

ProductDetails.Price = ({ children, ...restProps }) => {
  return <Price {...restProps}>{children}</Price>;
};

ProductDetails.Expiry = ({ children, ...restProps }) => {
  return <Expiry {...restProps}>{children}</Expiry>;
};

ProductDetails.Availablity = ({ children, ...restProps }) => {
  return <Availablity {...restProps}>{children}</Availablity>;
};

ProductDetails.WeightsGroup = ({ children, ...restProps }) => {
  return <WeightsGroup {...restProps}>{children}</WeightsGroup>;
};

ProductDetails.Weights = ({ ...restProps }) => {
  return (
    <label>
      <Weights {...restProps} />
      {restProps.value}
    </label>
  );
};

ProductDetails.Quantity = ({ ...restProps }) => {
  return <Quantity {...restProps} />;
};

ProductDetails.Desc = ({ children, ...restProps }) => {
  return <Desc {...restProps}>{children}</Desc>;
};

ProductDetails.PinCode = ({ children, ...restProps }) => {
  return <PinCode {...restProps}>{children}</PinCode>;
};

ProductDetails.Input = ({ ...restProps }) => {
  return <Input {...restProps} />;
};

ProductDetails.PinCodeButton = ({ children, ...restProps }) => {
  return <PinCodeButton {...restProps}>{children}</PinCodeButton>;
};

ProductDetails.Button = ({ children, ...restProps }) => {
  return <Button {...restProps}>{children}</Button>;
};

ProductDetails.HorizontalRule = ({ children, ...restProps }) => {
  return <HorizontalRule {...restProps}>{children}</HorizontalRule>;
};
