import React from "react";
import {
  Container,
  Inner,
  Row,
  Column,
  Link,
  SocialLinks,
  Title,
  Text,
  CopyrightText,
  Break,
  Cards,
  Subscribe,
  SubscribeButton,
} from "./styles/footer";

export default function Footer({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Footer.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Footer.Link = function FooterLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Footer.Text = function FooterText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Footer.CopyrightText = function FooterCopyrightText({children, ...restProps }) {
  return <CopyrightText {...restProps}>{children}</CopyrightText>;
};

Footer.Break = function FooterBreak({ children, ...restProps }) {
  return <Break {...restProps}>{children}</Break>;
};

Footer.SocialLinks = function FooterSocialLinks({ children, ...restProps }) {
  return <SocialLinks {...restProps}>{children}</SocialLinks>;
};

Footer.Cards = function FooterCards({ children, ...restProps }) {
  return <Cards {...restProps}>{children}</Cards>;
};

Footer.Subscribe = function FooterSubscribe({ ...restProps }) {
  return <Subscribe {...restProps} />;
};

Footer.SubscribeButton = function FooterSubscribeButton({children, ...restProps }) {
  return <SubscribeButton {...restProps}>{children}</SubscribeButton>;
};
