import React from "react";
import {
  Container,
  Inner,
  Row,
  Title,
  Card,
  CardInformation,
  CardTitle,
} from "./styles/collections";

export default function Collections({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>
        {children}
        <hr />
      </Inner>
    </Container>
  );
}

Collections.Title = function CollectionsTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Collections.Row = function CollectionsRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Collections.Card = function CollectionsCard({ ...restProps }) {
  return (
    <Card {...restProps}>
      <CardInformation>
        <CardTitle>{restProps.title}</CardTitle>
      </CardInformation>
    </Card>
  );
};
