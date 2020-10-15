import React from "react";

import {
  Container,
  Inner,
  Title,
  FilterItem,
  Checkbox,
  Slider,
} from "./styles/filter";

export default function Filter({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Filter.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Filter.FilterItem = ({ children, ...restProps }) => {
  return <FilterItem {...restProps}>{children}</FilterItem>;
};

Filter.Checkbox = ({ children, ...restProps }) => {
  return <Checkbox {...restProps}>{children}</Checkbox>;
};

Filter.Slider = ({ children, ...restProps }) => {
  return <Slider {...restProps}>{children}</Slider>;
};
