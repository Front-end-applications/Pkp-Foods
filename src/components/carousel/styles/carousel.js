import styled from "styled-components";

export const Container = styled.div`
  height: 25rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Inner = styled.div`
  width: ${(props) => props.width}px;
  transform: translateX(${(props) => props.translate}px);
  transition: transform ease-out 0.45s;
  -moz-transition: transform ease-out 0.45s;
  height: 100%;
  display: flex;
  position: absolute;
`;

export const Slide = styled.div`
  position: relative;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  min-width: 100%;
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.div`
  color: white;
  float: left;
  width: 50%;
  margin: 0 auto;
  position: relative;
`;

export const Title = styled.h3`
  text-align: left;
`;

export const Description = styled.p`
  text-align: left;
  line-height: 1.5;
`;

export const PaginationDots = styled.div`
  position: absolute;
  bottom: 25px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Dot = styled.div`
  padding: 4px;
  border-radius: 50%;
  margin-right: 8px;
  cursor: pointer;
  background: ${(props) => props.active ? "black" : "white"};
`;
