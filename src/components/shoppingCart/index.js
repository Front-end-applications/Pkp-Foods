import React from "react";

import {
  Container,
  Inner,
  BillingSummary,
  Title,
  CartTable,
  TableRow,
  TableHeader,
  TableData,
  Summary,
  SummaryInner,
  SummaryTitle,
  SummarySection,
  SectionTitle,
  SectionBody,
  SectionLabel,
  SectionValue,
  SectionTotal,
  HorizontalRule,
  Suggestions,
  GiftMessage,
  Button,
  ButtonsRow,
  ReactLink,
  Select,
  Options,
  Quantity,
  QtyBtn,
  ItemTitle,
  ItemDetails,
  ItemImage,
  ItemWeight,
  ItemButton,
} from "./styles/shoppingCart";

export default function ShoppingCart({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

ShoppingCart.BillingSummary = ({ children, ...restProps }) => {
  return <BillingSummary {...restProps}>{children}</BillingSummary>;
};

ShoppingCart.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

ShoppingCart.CartTable = ({ children, ...restProps }) => {
  return <CartTable {...restProps}>{children}</CartTable>;
};

ShoppingCart.TableRow = ({ children, ...restProps }) => {
  return <TableRow {...restProps}>{children}</TableRow>;
};

ShoppingCart.TableHeader = ({ children, ...restProps }) => {
  return <TableHeader {...restProps}>{children}</TableHeader>;
};

ShoppingCart.TableData = ({ children, ...restProps }) => {
  return <TableData {...restProps}>{children}</TableData>;
};

ShoppingCart.Summary = ({ children, ...restProps }) => {
  return (
    <Summary {...restProps}>
      <SummaryInner>{children}</SummaryInner>
    </Summary>
  );
};

ShoppingCart.SummaryTitle = ({ children, ...restProps }) => {
  return <SummaryTitle {...restProps}>{children}</SummaryTitle>;
};

ShoppingCart.SummarySection = ({ children, ...restProps }) => {
  return <SummarySection {...restProps}>{children}</SummarySection>;
};

ShoppingCart.SectionTitle = ({ children, ...restProps }) => {
  return <SectionTitle {...restProps}>{children}</SectionTitle>;
};

ShoppingCart.SectionBody = ({ children, ...restProps }) => {
  return <SectionBody {...restProps}>{children}</SectionBody>;
};

ShoppingCart.SectionLabel = ({ children, ...restProps }) => {
  return <SectionLabel {...restProps}>{children}</SectionLabel>;
};

ShoppingCart.SectionValue = ({ children, ...restProps }) => {
  return <SectionValue {...restProps}>{children}</SectionValue>;
};

ShoppingCart.SectionTotal = ({ children, ...restProps }) => {
  return <SectionTotal {...restProps}>{children}</SectionTotal>;
};

ShoppingCart.HorizontalRule = ({ ...restProps }) => {
  return <HorizontalRule {...restProps} />;
};

ShoppingCart.Suggestions = ({ children, ...restProps }) => {
  return <Suggestions {...restProps}>{children}</Suggestions>;
};

ShoppingCart.Button = ({ children, ...restProps }) => {
  return <Button {...restProps}>{children}</Button>;
};

ShoppingCart.ButtonsRow = ({ children, ...restProps }) => {
  return <ButtonsRow {...restProps}>{children}</ButtonsRow>;
};

ShoppingCart.ReactLink = ({ children, ...restProps }) => {
  return <ReactLink {...restProps}>{children}</ReactLink>;
};

ShoppingCart.GiftMessage = ({ children, ...restProps }) => {
  return <GiftMessage {...restProps}>{children}</GiftMessage>;
};

ShoppingCart.Select = ({ children, ...restProps }) => {
  return <Select {...restProps}>{children}</Select>;
};

ShoppingCart.Options = ({ children, ...restProps }) => {
  return <Options {...restProps}>{children}</Options>;
};

ShoppingCart.Quantity = ({ ...restProps }) => {
  return <Quantity {...restProps} />;
};

ShoppingCart.QtyBtn = ({ children, ...restProps }) => {
  return <QtyBtn {...restProps}>{children}</QtyBtn>;
};

ShoppingCart.ItemImage = ({ ...restProps }) => {
  return <ItemImage {...restProps} />;
};

ShoppingCart.ItemDetails = ({ children, ...restProps }) => {
  return <ItemDetails {...restProps}>{children}</ItemDetails>;
};

ShoppingCart.ItemTitle = ({ children, ...restProps }) => {
  return <ItemTitle {...restProps}>{children}</ItemTitle>;
};

ShoppingCart.ItemWeight = ({ children, ...restProps }) => {
  return <ItemWeight {...restProps}>{children}</ItemWeight>;
};

ShoppingCart.ItemButton = ({ children, ...restProps }) => {
  return <ItemButton {...restProps}>{children}</ItemButton>;
};
