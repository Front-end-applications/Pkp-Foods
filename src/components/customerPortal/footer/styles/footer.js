import styled from "styled-components/macro";

export const Container = styled.div`
  background: #141414;
`;

export const Inner = styled.div`
  padding: 3rem;
  margin: auto;
  max-width: 100%;
  flex-direction: column;

  @media (max-width: 1000px) {
    max-width: 100%;
    padding: 3rem;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Link = styled.a`
  color: #757575;
  font-size: 12px;
  margin-bottom: 0.5rem;
  text-decoration: none;
  outline: none;

  :hover {
    color: #ffffff;
  }
`;

export const Title = styled.p`
  color: white;
  font-size: 12px;
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

export const Text = styled.p`
  margin: 0 0 1rem 0;
  font-size: 12px;
  color: #757575;
`;

export const CopyrightText = styled.p`
  font-size: 10px;
  color: #757575;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export const SocialLinks = styled.a`
  color: #757575;
  display: inline;
  margin: 0.5rem;
  font-size: 30px;
  text-decoration: none;
  outline: none;

  :hover {
    color: #ffffff;
  }
`;

export const Cards = styled.p`
  color: #757575;
  display: inline;
  margin: 0 0.5rem;
  font-size: 30px;
  text-decoration: none;
`;

export const Subscribe = styled.input.attrs({
  type: "email",
  placeholder: "Your Email",
})`
  padding: 0.25rem;
  font-size: 12px;
`;

export const SubscribeButton = styled.button`
  width: fit-content;
  margin: 0.5rem 0;
  padding: 0.1rem;
  font-size: 12px;
`;
