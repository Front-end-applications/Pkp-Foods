import React, { useState, useRef, useEffect } from "react";
import { Carousel } from "../components";

const slides = [
  {
    title: "The Inception...",
    description:
      "The PKP started at RTC X Roads, after a family took a step forward to present Traditional Healthy Snacks as best alternative to counter Junk Food in the market, as the high consumption of JF is one of the reasons for deteriorating Health &amp; increasing lifestyle diseases such as diabetes & hypertension.",
    image:
      "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  },
  {
    title: "The Inception...",
    description:
      "The PKP started at RTC X Roads, after a family took a step forward to present Traditional Healthy Snacks as best alternative to counter Junk Food in the market, as the high consumption of JF is one of the reasons for deteriorating Health &amp; increasing lifestyle diseases such as diabetes & hypertension.",
    image:
      "https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80",
  },
  {
    title: "The Inception...",
    description:
      "The PKP started at RTC X Roads, after a family took a step forward to present Traditional Healthy Snacks as best alternative to counter Junk Food in the market, as the high consumption of JF is one of the reasons for deteriorating Health &amp; increasing lifestyle diseases such as diabetes & hypertension.",
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80",
  },
  {
    title: "The Inception...",
    description:
      "The PKP started at RTC X Roads, after a family took a step forward to present Traditional Healthy Snacks as best alternative to counter Junk Food in the market, as the high consumption of JF is one of the reasons for deteriorating Health &amp; increasing lifestyle diseases such as diabetes & hypertension.",
    image:
      "https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80"
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
  })
  
  useEffect(() => {
    function play() {
      autoPlayRef.current()
    }

    const interval = setInterval(play, 5000)
    return () => clearInterval(interval)
  }, []);

  function handleClick(index) {
    setState({
      activeIndex: index,
      translate: -(index * getWidth()),
    });
  }

  function nextSlide() {
    console.log(activeIndex, activeIndex === slides.length - 1);
    if(activeIndex === slides.length-1) {
      setState({
        activeIndex: 0,
        translate: 0,
      });
    } else {
      setState({
        activeIndex: activeIndex + 1,
        translate: -(activeIndex + 1) * getWidth(),
      });
    }
  }

  return (
    <Carousel>
      <Carousel.Inner state={state} handleSlide={nextSlide}>
        {slides.map((slide, index) => (
          <Carousel.Slide key={index} img={slide.image}>
            <Carousel.Text>
              <Carousel.Title>{slide.title}</Carousel.Title>
              <Carousel.Description>{slide.description}</Carousel.Description>
            </Carousel.Text>
          </Carousel.Slide>
        ))}
      </Carousel.Inner>

      <Carousel.PaginationDots activeIndex={activeIndex}>
        {slides.map((slide, index) => (
          <Carousel.Dot
            key={index}
            active={activeIndex === index}
            onClick={(event) => handleClick(index)}
          />
        ))}
      </Carousel.PaginationDots>
    </Carousel>
  );
}
