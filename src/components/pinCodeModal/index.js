import React from "react";

import {
  Container,
  Inner,
  Title,
  Desc,
  Form,
  Input,
  Submit,
} from "./styles/pinCodeModal";

export default function PinCodeModal({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

PinCodeModal.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

PinCodeModal.Desc = ({ children, ...restProps }) => {
  return <Desc {...restProps}>{children}</Desc>;
};

PinCodeModal.Form = ({ children, ...restProps }) => {
  return <Form {...restProps}>{children}</Form>;
};

PinCodeModal.Input = ({ children, ...restProps }) => {
  return <Input {...restProps} />;
};

PinCodeModal.Submit = ({ children, ...restProps }) => {
  return <Submit {...restProps}>{children}</Submit>;
};
