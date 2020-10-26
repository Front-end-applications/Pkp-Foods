import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled(ReactRouterLink)`
  display: inline-block;
  border: 1px solid #aaaaaa;
  margin: 0.5rem;
  padding: 0.3rem;
  text-decoration: none;
  color: black;

  :hover {
    cursor: pointer;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const ProductInformation = styled.div``;

export const Title = styled.p`
  font-size: 12px;
`;

export const Price = styled.p`
  font-weight: bold;
  font-size: 12px;
`;
