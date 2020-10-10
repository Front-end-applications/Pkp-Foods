import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  background: #000000;
`;

export const Inner = styled.div`
  display: flex;
  width: 70%;
  margin: auto;
  padding: 0.7rem;
`;

export const Link = styled(ReactRouterLink)`
  flex: 1;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  color: white;
  margin-left: 1rem;
  margin-right: 1rem;
`;
