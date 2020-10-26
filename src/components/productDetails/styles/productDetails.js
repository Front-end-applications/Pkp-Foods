import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  background: white;
  font-size: 13px;
  color: #333;
`;

export const Inner = styled.div`
  display: flex;
  margin: 0 auto;
  width: 78%;
  padding: 3rem;
`;

export const Details = styled.div`
  margin: 1rem 0;
  width: 50%;
`;

export const Image = styled.img`
  width: 50%;
  margin: 0 8rem;
`;

export const Title = styled.h4`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 0.4px;
  text-align: left;
  color: #5a5a5a;
  text-transform: capitalize;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: inherit;
  padding-right: 10%;
  margin: 0;
`;

export const Price = styled.p`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #1e1e1e;
  font-weight: 500;
  letter-spacing: 0.4px;
  margin: 0.5rem 0;

  ::after {
    content: "(Prices are all inclusive of taxes)";
    color: #787878;
    letter-spacing: 0.2px;
    font-size: 11px;
    font-family: "Quicksand", sans-serif;
    vertical-align: top;
    margin-left: 5px;
  }
`;

export const Expiry = styled.p`
  border-radius: 2px;
  background-color: #fef4dc;
  display: inline-block;
  letter-spacing: 0.3px;
  font-size: 12px;
  color: #3c3c3c;
  font-weight: 400;
  padding: 0 6px;
`;

export const Availablity = styled.div`
  color: #408b2d;
  text-align: left;
  display: flex;
  align-items: center;

  & span {
    margin-left: 15px;
    margin-right: 5px;
    color: #000;
  }

  ::before {
    content: "";
    position: absolute;
    display: block;
    width: 10px;
    height: 10px;
    background: transparent;
    border-radius: 100%;
    background: #408b2d;
  }
`;

export const WeightsGroup = styled.div``;

export const Weights = styled.input.attrs({
  type: "radio",
})`
  background-color: #fef4dc !important;
  border: solid 1px #a72c41 !important;
  outline: 0 solid #a72c41;
  margin: 0 0 0 1rem;
`;

export const Quantity = styled.input.attrs({
  type: "number",
})`
  width: 48px;
  height: 27px;
  color: #1e1e1e;
  font-size: 14px;
  border: solid 1px #c8c8c8;
  margin: 0 1rem;
  letter-spacing: 0.3px;
  font-weight: normal;
`;

export const Desc = styled.p``;

export const PinCode = styled.form`
  display: block;
  margin: 1rem 0;
`;

export const Input = styled.input`
  color: #969696;
  font-size: 13px;
  padding: 0 1rem;
  height: 30px;
  width: 35%;
  border: 1px solid #c8c8c8;
  border-right-color: rgb(200, 200, 200);
  border-right-style: solid;
  border-right-width: 1px;
  border-right: 0;
  letter-spacing: 0.3px;
`;

export const PinCodeButton = styled.button`
  height: 32px;
  color: #fff;
  border: 1px solid #5a5a5a;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const Button = styled.button`
  background: ${(props) => props.background};
  margin: 1rem 0.1rem 0 0;
  border-radius: 0;
  width: 180px;
  height: 38px;
  font-size: 14px;
  font-weight: normal;
  border: 0;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const HorizontalRule = styled.hr`
  height: 0px;
  border: 0;
  border-bottom: 1px solid #c6c6c6; ;
`;
