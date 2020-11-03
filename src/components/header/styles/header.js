import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  font-family: "Quicksand", sans-serif;
  font-size; 0.8em;
  background: ${(props) => props.background}
`;
/* #1f0000, #080236, #1873eb, #3a5794, #3c5a9a */
export const Banner = styled.div`
  height: calc(1.9rem + 14px);
  background: #000000;
  position:
`;

export const Inner = styled.div`
  float: right;
`;

export const Select = styled.select`
  margin: 0.5rem;
  font-size: 14px;
`;

export const Option = styled.option``;

export const Image = styled.img`
  display: block;
  background-color: #bd1906;
  padding: 0.5rem;
  position: absolute;
  top: 0;
  margin-left: 1.5rem;
  width: 5rem;
  height: auto;
`;

export const Link = styled.a`
  font-size: 12px;
  margin: 0.5rem;
  color: white;
  text-decoration: none;
  outline: none;
  cursor: pointer;
`;

export const ReactLink = styled(ReactRouterLink)`
  font-size: 12px;
  margin: 0.5rem;
  color: white;
  text-decoration: none;
  outline: none;
  cursor: pointer;
`;

export const Pincode = styled.div`
  display: block;
  width: 100%;
  overflow: auto;

  & a {
    display: flex;
    align-items: center;
    margin-right: 4rem;
    float: right;
    color: black;
  }
`;
