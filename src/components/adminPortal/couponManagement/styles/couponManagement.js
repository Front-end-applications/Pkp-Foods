import styled from 'styled-components/macro';

export const Container = styled.div``;

export const Inner = styled.div``;

export const Row = styled.div`
  display: flex;
  margin: 0 0 1rem;
`;

export const Column = styled.div`
  flex: 1;
  margin: 0 1rem;
`;

export const Section = styled.div``;

export const SectionTitle = styled.h5`
  text-transform: uppercase;
`;

export const Label = styled.div`
  font-style: normal;
  letter-spacing: normal;
  width: 100%;
  white-space: nowrap;
  vertical-align: baseline;
  line-height: 1;
  margin: 0;
  color: #666;
  text-align: left;
  padding: 0;
  border: 0;
  font-weight: 400 !important;
  font-size: 14px;
  text-transform: capitalize;

  & span {
    margin-left: 10px;
    font-weight: 400 !important;
    font-size: 10px;
    line-height: 1;
    font-style: normal;
    letter-spacing: normal;
  }`;

export const Text = styled.input.attrs({
  type: "text",
})`
  font-size: 14px;
  margin: 0.5rem 0;
  width: 100%;
  background: #fff;
  border: 1px solid #c2c2c2;
  border-radius: 1px;
  height: 2rem;
  padding: 0 0.5rem;
  vertical-align: baseline;
  box-sizing: border-box;
`;

export const Date = styled.input.attrs({
  type: "date",
})`
  font-size: 14px;
  margin: 0.5rem 0;
  width: 100%;
  background: #fff;
  border: 1px solid #c2c2c2;
  border-radius: 1px;
  height: 2rem;
  padding: 0 0.5rem;
  vertical-align: baseline;
  box-sizing: border-box;
`;

export const Select = styled.select`
  font-size: 14px;
  margin: 0.5rem 0;
  width: calc(100%);
  background: #fff url("/images/accessories/select-bg.png") no-repeat 100% 50%;
  background-size: 2rem;
  border: 1px solid #c2c2c2;
  border-radius: 1px;
  height: 2rem;
  padding: 0 0.5rem;
  vertical-align: baseline;
  box-sizing: border-box;
  appearance: none;
`;

export const Option = styled.option``;

export const CreateButton = styled.button`
  margin: auto;
`;

export const Table = styled.div`
  margin: 1.5rem 0;
  width: 100%;
  display: table;
`;

export const TableRow = styled.div`
  display: table-row;
  justify-content: center;
  width: 100%;
`;

export const TableHeader = styled.h5`
  text-align: center;
  display: table-cell;
  border: 1px solid #ccc;
  margin: 0;
  padding: 1rem;
`;

export const TableData = styled.div`
  display: table-cell;
  border: 1px solid #ccc;
  margin: 0;
  padding: 0.5rem;
  align-items: center;
  font-style: normal;
  line-height: 1;
  white-space: nowrap;
  font-size: 14px;
`;

