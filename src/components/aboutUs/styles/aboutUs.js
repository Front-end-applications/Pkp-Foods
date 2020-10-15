import styled from "styled-components/macro";

export const Container = styled.div`
  width: 70%;
  margin: auto;
  text-align: justify;
`;

export const Inner = styled.div``;

export const Title = styled.h1``;

export const Paragraph = styled.p``;

export const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const Link = styled.a``;

export const List = styled.ul``;

export const ListItem = styled.li`
  list-style: none;

  :before {
    content: "✓ ";
  }
`;
