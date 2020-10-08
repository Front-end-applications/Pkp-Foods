import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  margin: auto;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const Text = styled.div`
  width: 50%;
  float: left;
  padding: 1rem;
`;

export const Title = styled.h3`
  text-align: left;
`;

export const Description = styled.p`
  text-align: justify;
  line-height: 1.5;
`;

export const Button = styled.button`
  padding: 0.5rem;
  border-radius: 0.4rem;
`
