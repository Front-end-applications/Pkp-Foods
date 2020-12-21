import styled from "styled-components/macro";

export const Container = styled.div`
  box-sizing: border-box;
  background: white;
`;

export const Inner = styled.div`
  margin: 0 auto;
  width: 90%;
`;

export const Header = styled.div`
  text-align: center;
`;

export const Title = styled.h2`
  margin: 0;
  padding: 2rem 0 0;
`;

export const Desc = styled.p``;

export const Body = styled.div`
  display: flex;
`;

export const FilterContainer = styled.div`
  margin-bottom: 2rem;
  flex: 1;
`;

export const MainContentContainer = styled.div`
  margin-bottom: 2rem;
  flex: 4;
`;

export const ProductsCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 3rem;
`;

export const Sort = styled.div`
  float: right;
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
`;

export const Select = styled.select``;

export const Option = styled.option``;

export const Button = styled.button`
  background: none;
  border: none;
`;
