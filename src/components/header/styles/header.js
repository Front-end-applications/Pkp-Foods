import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;
/* #1f0000, #080236, #1873eb, #3a5794, #3c5a9a */
export const Banner = styled.div`
  height: calc(1.9rem + 14px);
  background: #000000;
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
  margin-left: 0.5rem;
  width: 5rem;
  height: auto;
`;

export const Link = styled.a`
  font-size: 12px;
  margin: 0.5rem;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
`;
