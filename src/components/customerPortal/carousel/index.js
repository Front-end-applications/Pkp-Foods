import React from "react";

import {
  Container,
  Inner,
  Slide,
  Image,
  Text,
  Title,
  Description,
  PaginationDots,
  Dot
} from "./styles/carousel";

export default function Carousel({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      {children}
    </Container>
  );
}

Carousel.Inner = function CarouselInner({ children, ...restProps }) {
  return (
    <Inner
      translate={restProps.state.translate}
      width={restProps.state.width}
    >
      {children}
    </Inner>
  );
};

Carousel.Slide = function CarouselSlide({ children, ...restProps }) {
  return (
    <Slide {...restProps}>
      {children}
    </Slide>
  );
}

Carousel.Text = function CarouselText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Carousel.Title = function CarouselTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Carousel.Description = function CarouselDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};

Carousel.PaginationDots = function CarouselPaginationDots({children ,...restProps }) {
  return <PaginationDots {...restProps }>{children}</PaginationDots>;
}

Carousel.Dot = function CarouselDot({ ...restProps }) {
  return <Dot active={restProps.active} onClick={restProps.onClick} />;
}

Carousel.Image = function CarouselImage({...restProps}) {
  return <Image {...restProps} />
}
