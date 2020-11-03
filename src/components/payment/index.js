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
} from "./styles/payment";

export default function Payment({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Payment.Body = ({ children, ...restProps }) => {
  return <Body {...restProps}>{children}</Body>;
};

Payment.ProgressBar = ({ children, ...restProps }) => {
  return <ProgressBar {...restProps}>{children}</ProgressBar>;
};

Payment.ProgressElement = ({ children, ...restProps }) => {
  return <ProgressElement {...restProps}>{children}</ProgressElement>;
};

Payment.DeliveryDetails = ({ children, ...restProps }) => {
  return <DeliveryDetails {...restProps}>{children}</DeliveryDetails>;
};

Payment.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Payment.Input = ({ ...restProps }) => {
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

Payment.Select = ({ children, ...restProps }) => {
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

Payment.Option = ({ children, ...restProps }) => {
  return <Option {...restProps}>{children}</Option>;
};

Payment.ShippingMethodsTable = ({ children, ...restProps }) => {
  return <ShippingMethodsTable {...restProps}>{children}</ShippingMethodsTable>;
};

Payment.TableRow = ({ children, ...restProps }) => {
  return <TableRow {...restProps}>{children}</TableRow>;
};

Payment.TableHeader = ({ children, ...restProps }) => {
  return <TableHeader {...restProps}>{children}</TableHeader>;
};

Payment.Button = ({ children, ...restProps }) => {
  return <Button {...restProps}>{children}</Button>;
};

Payment.OrderSummary = ({ children, ...restProps }) => {
  return (
    <OrderSummary {...restProps}>
      <OrderSummaryInner>{children}</OrderSummaryInner>
    </OrderSummary>
  );
};

Payment.SummaryTitle = ({ children, ...restProps }) => {
  return <SummaryTitle {...restProps}>{children}</SummaryTitle>;
};

Payment.SectionTitle = ({ children, ...restProps }) => {
  return <SectionTitle {...restProps}>{children}</SectionTitle>;
};

Payment.TableData = ({ children, ...restProps }) => {
  return <TableData {...restProps}>{children}</TableData>;
};

Payment.Radio = ({ children, ...restProps }) => {
  return <Radio {...restProps}>{children}</Radio>;
};

Payment.ReactLink = ({ children, ...restProps }) => {
  return <ReactLink {...restProps}>{children}</ReactLink>;
};

Payment.HorizontalRule = ({ children, ...restProps }) => {
  return <HorizontalRule {...restProps}>{children}</HorizontalRule>;
};

Payment.ItemImage = ({ ...restProps }) => {
  return <ItemImage {...restProps} />;
};

Payment.ItemDetails = ({ children, ...restProps }) => {
  return <ItemDetails {...restProps}>{children}</ItemDetails>;
};

Payment.ItemText = ({ children, ...restProps }) => {
  return <ItemText {...restProps}>{children}</ItemText>;
};
