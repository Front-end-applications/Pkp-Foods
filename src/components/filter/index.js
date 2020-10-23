import React from "react";

import {
  Container,
  Inner,
  Title,
  FilterCategory,
  FilterCategoryTitle,
  Checkbox,
  Slider,
} from "./styles/filter";

export default function Filter({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Filter.Inner = ({ children, ...restProps }) => {
  return <Inner {...restProps}>{children}</Inner>;
};

Filter.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Filter.FilterCategory = ({ children, ...restProps }) => {
  return <FilterCategory {...restProps}>{children}</FilterCategory>;
};

Filter.FilterCategoryTitle = ({ children, ...restProps }) => {
  return <FilterCategoryTitle {...restProps}>{children}</FilterCategoryTitle>;
};

Filter.Checkbox = ({ ...restProps }) => {
  return (
    <>
      <label>
        <input type="checkbox" value={restProps.name} />
        {restProps.name}
      </label>
    </>
  );
};

Filter.Slider = ({ children, ...restProps }) => {
  return <Slider {...restProps}>{children}</Slider>;
};
