import React from "react";

import {
  Container,
  Inner,
  ProgressBar,
  ProgressElement,
  Body,
  DeliveryDetails,
  Title,
  Label,
  Input,
  Select,
  Option,
  ShippingMethodsTable,
  TableRow,
  TableHeader,
  Button,
  OrderSummary,
  OrderSummaryInner,
  SummaryTitle,
  SectionTitle,
  TableData,
  Radio,
  ReactLink,
  HorizontalRule,
  ItemImage,
  ItemDetails,
  ItemText,
} from "./styles/checkout";

export default function Checkout({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Checkout.Body = ({ children, ...restProps }) => {
  return <Body {...restProps}>{children}</Body>;
};

Checkout.ProgressBar = ({ children, ...restProps }) => {
  return <ProgressBar {...restProps}>{children}</ProgressBar>;
};

Checkout.ProgressElement = ({ children, ...restProps }) => {
  return <ProgressElement {...restProps}>{children}</ProgressElement>;
};

Checkout.DeliveryDetails = ({ children, ...restProps }) => {
  return <DeliveryDetails {...restProps}>{children}</DeliveryDetails>;
};

Checkout.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Checkout.Input = ({ ...restProps }) => {
  return (
    <>
      {restProps.label && (
        <Label>
          {restProps.label}
          {restProps.required && <span style={{ color: "red" }}>*</span>}{" "}
        </Label>
      )}
      <Input {...restProps} />
    </>
  );
};

Checkout.Select = ({ children, ...restProps }) => {
  return (
    <>
      {restProps.label && (
        <Label>
          {restProps.label}
          {restProps.required && <span style={{ color: "red" }}>*</span>}{" "}
        </Label>
      )}
      <Select {...restProps}>{children}</Select>
    </>
  );
};

Checkout.Option = ({ children, ...restProps }) => {
  return <Option {...restProps}>{children}</Option>;
};

Checkout.ShippingMethodsTable = ({ children, ...restProps }) => {
  return <ShippingMethodsTable {...restProps}>{children}</ShippingMethodsTable>;
};

Checkout.TableRow = ({ children, ...restProps }) => {
  return <TableRow {...restProps}>{children}</TableRow>;
};

Checkout.TableHeader = ({ children, ...restProps }) => {
  return <TableHeader {...restProps}>{children}</TableHeader>;
};

Checkout.Button = ({ children, ...restProps }) => {
  return <Button {...restProps}>{children}</Button>;
};

Checkout.OrderSummary = ({ children, ...restProps }) => {
  return (
    <OrderSummary {...restProps}>
      <OrderSummaryInner>{children}</OrderSummaryInner>
    </OrderSummary>
  );
};

Checkout.SummaryTitle = ({ children, ...restProps }) => {
  return <SummaryTitle {...restProps}>{children}</SummaryTitle>;
};

Checkout.SectionTitle = ({ children, ...restProps }) => {
  return <SectionTitle {...restProps}>{children}</SectionTitle>;
};

Checkout.TableData = ({ children, ...restProps }) => {
  return <TableData {...restProps}>{children}</TableData>;
};

Checkout.Radio = ({ children, ...restProps }) => {
  return <Radio {...restProps}>{children}</Radio>;
};

Checkout.ReactLink = ({ children, ...restProps }) => {
  return <ReactLink {...restProps}>{children}</ReactLink>;
};

Checkout.HorizontalRule = ({ children, ...restProps }) => {
  return <HorizontalRule {...restProps}>{children}</HorizontalRule>;
};

Checkout.ItemImage = ({ ...restProps }) => {
  return <ItemImage {...restProps} />;
};

Checkout.ItemDetails = ({ children, ...restProps }) => {
  return <ItemDetails {...restProps}>{children}</ItemDetails>;
};

Checkout.ItemText = ({ children, ...restProps }) => {
  return <ItemText {...restProps}>{children}</ItemText>;
};
