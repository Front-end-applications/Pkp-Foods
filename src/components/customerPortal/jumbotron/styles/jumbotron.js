import styled from "styled-components/macro";

export const Container = styled.div`
  width: 70%;
  margin: auto;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;
  padding: 1rem;
  height: 200px;
`;

export const Title = styled.h1`
  font-size: 35px;
  text-transform: uppercase;
  margin-bottom: 3rem;
  color: white;
`;

export const Link = styled.a`
  font-size: 1.2rem;
  text-decoration: none;
  font-weight: bold;
  padding: 1rem;
  background: #e4002b;
  color: white;
  border-radius: 0.5rem;
  margin: 1rem;
  text-transform: uppercase;
`;
