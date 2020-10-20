import styled from "styled-components/macro";

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  margin: 0 3rem 3rem;
`;

export const Inner = styled.div`
  width: 100%;
`;

export const Title = styled.h4`
  text-transform: uppercase;
  text-align: center;
`;

export const Desc = styled.p`
  text-align: center;
  margin: 0.5rem;
`;

export const Form = styled.form``;

export const Input = styled.input.attrs({
  type: "number",
})`
  border: 1px solid #ccc;
  margin-top: 2rem;
  color: #1e1e1e;
  font-size: 14px !important;
  font-weight: 500;
  padding: 0.5rem;
  width: calc(100% - 1rem);
  -webkit-appearance: none;
  -moz-appearance: textfield;
`;

export const Submit = styled.button`
  width: 100%;
  font-weight: 500 !important;
  border-radius: 0;
  padding: 0.5rem;
  font-size: 18px;
  background: #b5163d;
  color: #fff;
  letter-spacing: 1px;
  border: 0;
  margin-top: 0.75rem;
  cursor: pointer;

  :hover {
    background: #9e1536;
  }
`;
