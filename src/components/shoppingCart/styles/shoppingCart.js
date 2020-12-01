import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  box-sizing: border-box;
  background: white;
  font-size: 16px;
  color: #333;
  line-height: 1.42857143;
`;

export const Inner = styled.div`
  margin: 0 auto;
  width: 78%;
  padding: 3rem;
`;

export const Title = styled.h3`
  text-transform: uppercase;
`;

export const BillingSummary = styled.div`
  display: flex;
  width: 100%;
`;

export const CartTable = styled.div`
  flex: 6;
  margin: 0 1.5rem 0 0;
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 0.75fr 1fr 0.75fr;
`;

export const TableHeader = styled.h5`
  text-align: center;
  border: 1px solid #ccc;
  margin: 0;
  padding: 1rem;
`;

export const TableData = styled.div`
  justify-content: center;
  border: 1px solid #ccc;
  margin: 0;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  font-style: normal;
  line-height: 1;
  white-space: nowrap;
  font-size: 14px;
`;

export const Summary = styled.div`
  flex: 2;
  margin: 0 0 0 1.5rem;
`;

export const SummaryInner = styled.div`
  background: #f5f5f5;
  padding: 0 1rem 1rem;
`;

export const SummaryTitle = styled.h3`
  margin: 0;
  padding: 1rem 0 0;
  text-transform: uppercase;
`;

export const SummarySection = styled.div``;

export const SectionTitle = styled.h5`
  margin: 0;
  text-transform: uppercase;
  font-size: 13px;
`;

export const SectionBody = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 1rem;
  font-size: 14px;
  color: #333;
`;

export const SectionLabel = styled.div`
  margin: 0.5rem 0;
`;

export const SectionValue = styled.div`
  margin: 0.5rem 0;
  text-align: right;
`;

export const SectionTotal = styled.h3`
  margin: 0;
`;

export const Suggestions = styled.div``;

export const GiftMessage = styled.div``;

export const Button = styled.button`
  background: ${(props) => props.background};
  margin: 2rem 0.5rem;
  width: 200px;
  height: 38px;
  font-size: 12px;
  font-weight: 600;
  color: ${(props) => props.color};
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: none;
  border: 1px solid #ccc;
  padding: 0;
`;

export const ButtonsRow = styled.div`
  float: right;
`;

export const ReactLink = styled(ReactRouterLink)`
  display: block;
  text-decoration: none;
  color: ${(props) => props.color};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Select = styled.select``;

export const Options = styled.option``;

export const Quantity = styled.input.attrs({ type: "text", pattern: "[1-9]*" })`
  width: 27px;
  font-family: "Quicksand", sans-serif;
  padding: 0.3rem;
  color: #1e1e1e;
  font-size: 14px;
  border: solid 1px #c8c8c8;
  margin: 0 2px;
  letter-spacing: 0.3px;
  font-weight: normal;
  text-align: center;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: textfield;
`;

export const QtyBtn = styled.button`
  width: 27px;
  font-family: "Quicksand", sans-serif;
  padding: 0.3rem 0;
  color: #8b0f2e;
  font-size: 14px;
  border: solid 1px #c8c8c8;
  margin: 0 2px;
  font-weight: bold;
  background: #fff;
`;

export const ItemImage = styled.img`
  flex: 1;
  width: 100px;
`;

export const ItemDetails = styled.div`
  flex: 2;
  font-size: 14px;
  line-height: 1.5;
  text-align: left;
  margin: 0 1rem;
  font-style: normal;
  white-space: normal;
  font-weight: 400;
`;

export const ItemTitle = styled(ReactRouterLink)`
  color: #000;
  hyphens: auto;
  word-wrap: break-word;
  background-color: transparent;
  text-decoration: none;
  display: block;
  max-height: 24px;
  overflow: hidden;
  outline: 0;

  :hover {
    color: #a52a3e;
  }
`;

export const ItemWeight = styled.p`
  font-size: 12px;
  color: #666;
`;

export const ItemButton = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
`;

export const HorizontalRule = styled.hr`
  border: none;
  border-top: 1px solid #ccc;
`;
