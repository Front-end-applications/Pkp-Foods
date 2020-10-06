import styled from "styled-components";

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

export const Text = styled.div`
  width: 50%;
  float: left;
`

export const Title = styled.h3`
  text-align: left;
`;

export const Description = styled.p`
  text-align: justify;
  line-height: 1.5;
`;
