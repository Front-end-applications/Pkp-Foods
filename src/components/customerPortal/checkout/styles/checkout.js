import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  box-sizing: border-box;
  background: white;
  font-size: 16px;
  color: #333;
  line-height: 1.42857143;
  font-family: "Poppins", sans-serif, "Helvetica Neue", Helvetica, Arial,
    sans-serif !important;
`;

export const Inner = styled.div`
  margin: 0 auto;
  width: 78%;
  padding: 3rem;
`;

export const ProgressBar = styled.ul`
  margin-bottom: 30px;
  overflow: hidden;
  counter-reset: step;
  text-align: center;
  width: 100%;
  display: flex;
  padding: 0;
`;

export const ProgressElement = styled.li`
  list-style-type: none;
  color: #e4e4e4;
  width: 15%;
  text-transform: uppercase;
  font-size: 14px;
  background: #fff;
  float: left;
  position: relative;
  z-index: 2;

  ::before {
    content: "\\2713";
    padding: 0.5rem 0.75rem 0.5rem 0.25rem;
    width: 10px;
    line-height: 10px;
    display: block;
    font-size: 24px;
    color: #a52a3e;
    background: #fff;
    border-radius: 50%;
    margin: 0 auto 5px auto;
    border: 5px solid #a52a3e;
  }

  ::after {
    content: "";
    width: 100%;
    height: 8px;
    background: #a52a3e;
    position: absolute;
    left: 0%;
    top: 25%;
    z-index: -1;
    border-radius: 3px;
  }
`;

export const Body = styled.div`
  display: flex;
`;
export const DeliveryDetails = styled.div`
  flex: 8;
  margin: 0 1.5rem 0 0;
`;

export const Title = styled.div`
  text-transform: uppercase;
  margin: 0.5rem 0 0;
  color: #3d3d3d;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.6px;
  font-style: normal;
`;

export const Label = styled.label`
  font-style: normal;
  letter-spacing: normal;
  width: 100%;
  white-space: nowrap;
  vertical-align: baseline;
  line-height: 1;
  margin: 0;
  display: inline-block;
  color: #666;
  text-align: left;
  padding: 0;
  border: 0;
  font-weight: 400 !important;
  font-size: 14px;

  & span {
    margin-left: 10px;
    font-weight: 400 !important;
    font-size: 10px;
    line-height: 1;
    font-style: normal;
    letter-spacing: normal;
  }
`;

export const Input = styled.input`
  font-size: 14px;
  margin: 0.5rem 0 2rem;
  width: calc(100% - 200px);
  background: #fff;
  border: 1px solid #c2c2c2;
  border-radius: 1px;
  height: 32px;
  padding: 0 9px;
  vertical-align: baseline;
  box-sizing: border-box;
`;

export const Select = styled.select`
  font-size: 14px;
  margin: 0.5rem 0 2rem;
  width: calc(100% - 200px);
  background: #fff url("/images/accessories/select-bg.png") no-repeat 100% 50%;
  background-size: 30px;
  border: 1px solid #c2c2c2;
  appearance: none;
  border-radius: 1px;
  height: 32px;
  padding: 0 9px;
  vertical-align: baseline;
  box-sizing: border-box;
`;

export const Option = styled.option`
  margin-right: 10px;
  width: calc(100% - 200px);
  background: #fff;
  border: 1px solid #c2c2c2;
  border-radius: 1px;
  height: 32px;
  padding: 0 9px;
  vertical-align: baseline;
  box-sizing: border-box;
`;

export const ShippingMethodsTable = styled.div``;

export const TableRow = styled.div`
  display: flex;
`;

export const TableHeader = styled.h5`
  flex: 1;
  text-align: center;
  margin: 0;
`;

export const TableData = styled.div`
  flex: 1;
  justify-content: center;
  margin: 0;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  font-style: normal;
  line-height: 1;
  white-space: nowrap;
  font-size: 14px;
`;

export const Radio = styled.input.attrs({
  type: "radio",
})``;

export const OrderSummary = styled.div`
  flex: 3;
`;

export const OrderSummaryInner = styled.div`
  width: 100%;
  font-size: 14px;
  margin: 0 0 0 1.5rem;
  background: #f5f5f5;
  margin: 0;
  padding: 22px 30px;
  font-style: normal;
  font-weight: 400;
  border: 1px solid rgba(0, 0, 0, 0.2);
  outline: 0;
  background-clip: padding-box;
  position: relative;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
`;

export const SummaryTitle = styled.div`
  color: #3d3d3d;
  letter-spacing: 0.6px;
  font-style: normal;
  margin: 0;
  padding-bottom: 10px;
  color: #333;
  font-weight: 300;
  font-size: 1.5rem;
`;


export const SectionTitle = styled.div`
  color: #a52a3e;
  font-size: 16px;
  text-transform: uppercase;
  display: block;
  text-decoration: none;
  margin-bottom: 0;
  position: relative;
  padding: 10px 40px 0 0;
  cursor: default;
`;

export const ItemImage = styled.img`
  width: 75px;
`;

export const ItemDetails = styled.div`
  line-height: 1.5;
  text-align: left;
  font-style: normal;
  white-space: normal;
  font-weight: 400;
  display: flex;
  color: #222;
  align-items: center;
`;

export const ItemText = styled.p`
  font-size: 12px;
  padding: 0 1rem;
`;

export const Button = styled.button`
  background: ${(props) => props.background};
  float: right;
  margin: 2rem 0.5rem;
  width: 100px;
  height: 38px;
  font-size: 12px;
  font-weight: 600;
  color: ${(props) => props.color};
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: none;
  border: 1px solid #ccc;
`;

export const ReactLink = styled(ReactRouterLink)`
  text-decoration: none;
  color: ${(props) => props.color};
`;

export const HorizontalRule = styled.hr`
  border: none;
  border-top: 1px solid #ccc;
`;
