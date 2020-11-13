import React, { useState, useRef, useEffect } from "react";

import { Carousel } from "../../components";

const slides = [
  {
    title: "The Inception...",
    description:
      "The PKP started at RTC X Roads, after a family took a step forward to present Traditional Healthy Snacks as best alternative to counter Junk Food in the market, as the high consumption of JF is one of the reasons for deteriorating Health &amp; increasing lifestyle diseases such as diabetes & hypertension.",
    image: "/images/home/carousel/bag.png",
  },
  {
    title: "The Inception...",
    description:
      "The PKP started at RTC X Roads, after a family took a step forward to present Traditional Healthy Snacks as best alternative to counter Junk Food in the market, as the high consumption of JF is one of the reasons for deteriorating Health &amp; increasing lifestyle diseases such as diabetes & hypertension.",
    image: "/images/home/carousel/edited_square_3.png",
  },
  {
    title: "The Inception...",
    description:
      "The PKP started at RTC X Roads, after a family took a step forward to present Traditional Healthy Snacks as best alternative to counter Junk Food in the market, as the high consumption of JF is one of the reasons for deteriorating Health &amp; increasing lifestyle diseases such as diabetes & hypertension.",
    image: "/images/home/carousel/Picture2.png",
  },
];

export default function CarouselContainer() {
  const getWidth = () => window.innerWidth;

  const [state, setState] = useState({
    translate: 0,
    width: getWidth(),
    activeIndex: 0,
  });

  const { activeIndex } = state;

  const autoPlayRef = useRef();

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    function play() {
      autoPlayRef.current();
    }

    const interval = setInterval(play, 5000);
    return () => clearInterval(interval);
  }, []);

  function handleClick(index) {
    setState({
      activeIndex: index,
      translate: -(index * getWidth()),
    });
  }

  function nextSlide() {
    if (activeIndex === slides.length - 1) {
      setState({
        activeIndex: 0,
        translate: 0,
      });
    } else {
      setState({
        activeIndex: activeIndex + 1,
        translate: -((activeIndex + 1) * getWidth()) + (activeIndex + 1) * 12,
      });
    }
  }

  return (
    <Carousel>
      <Carousel.Inner state={state} handleSlide={nextSlide}>
        {slides.map((slide, index) => (
          <Carousel.Slide key={index}>
            <Carousel.Image src={slide.image} />
          </Carousel.Slide>
        ))}
      </Carousel.Inner>

      <Carousel.PaginationDots activeIndex={activeIndex}>
        {slides.map((slide, index) => (
          <Carousel.Dot
            key={index}
            active={activeIndex === index}
            onClick={(_event) => handleClick(index)}
          />
        ))}
      </Carousel.PaginationDots>
    </Carousel>
  );
}
