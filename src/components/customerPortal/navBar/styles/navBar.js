import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  background: ${(props) => (props.background ? props.background : "black")};
  color: ${(props) => (props.color ? props.color : "white")};
  border-bottom: 1px solid #cccccc;
`;

export const Inner = styled.div`
  display: flex;
  width: 70%;
  margin: auto;
  padding: 0.7rem;
  color: inherit;
`;

export const Link = styled(ReactRouterLink)`
  color: inherit;
  text-align: center;
  flex: 1;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  margin-left: 1rem;
  margin-right: 1rem;
  outline: none;
`;
