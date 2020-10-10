import React from "react";

import {
  Container,
  Inner,
  Title,
  Paragraph,
  Image,
  Link,
  List,
  ListItem,
} from "./styles/aboutUs";

export default function AboutUs({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

AboutUs.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

AboutUs.Paragraph = ({ children, ...restProps }) => {
  return <Paragraph {...restProps}>{children}</Paragraph>;
};

AboutUs.Image = ({ children, ...restProps }) => {
  return <Image {...restProps} />;
};

AboutUs.Link = ({ children, ...restProps }) => {
  return <Link {...restProps}>{children}</Link>;
};

AboutUs.List = ({ children, ...restProps }) => {
  return <List {...restProps}>{children}</List>;
};

AboutUs.ListItem = ({ children, ...restProps }) => {
  return <ListItem {...restProps}>{children}</ListItem>;
};
