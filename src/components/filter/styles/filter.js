import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
`;

export const Inner = styled.div`
  border: 1px solid #dcdcdc;
  margin-top: 1.5rem;
`;

export const Title = styled.h4`
  margin: 0.4rem 0;
`;

export const FilterCategory = styled.div`
  border: 1px solid #dcdcdc;
  padding: 0.75rem;
`;

export const FilterCategoryTitle = styled.h5`
  margin: 0 0 1rem;
`;

export const Checkbox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Slider = styled.input.attrs({
  type: "range",
})``;
