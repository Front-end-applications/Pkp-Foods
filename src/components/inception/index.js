import React from "react";
import {
  Container,
  Title,
  Text,
  Description,
} from "./styles/inception";

export default function Inception({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Inception.Text = function InceptionText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Inception.Title = function InceptionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Inception.Description = function InceptionDescription({
  children,
  ...restProps
}) {
  return <Description {...restProps}>{children}</Description>;
};