import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Container,
  Banner,
  Inner,
  Image,
  Select,
  Option,
  Link,
} from "./styles/header";

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Banner = function HeaderBanner({ children, ...restProps }) {
  return <Banner {...restProps}>{children}</Banner>;
};

Header.Inner = function HeaderInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
};

Header.Select = function HeaderSelect({ children, ...restProps }) {
  return <Select {...restProps}>{children}</Select>;
};

Header.Option = function HeaderOption({ children, ...restProps }) {
  return <Option {...restProps}>{children}</Option>;
};

Header.Link = function HeaderLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Header.Image = function HeaderImage({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Image {...restProps} />
    </ReactRouterLink>
  );
};
