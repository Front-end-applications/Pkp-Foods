import React from "react";

import { Container, Title, Link } from "./styles/jumbotron";

export default function Jumbotron({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.Link = function JumbotronLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};
