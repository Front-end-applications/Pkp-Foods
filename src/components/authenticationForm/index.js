import React from "react";

import {
  Container,
  Inner,
  SigninContainer,
  SignupContainer,
  Title,
  Form,
  SocialLinks,
  Link,
  Text,
  Input,
  Submit,
  OverlayContainer,
  Overlay,
  OverlayTitle,
  OverlayPanel,
  OverlayRight,
  OverlayLeft,
} from "./styles/authenticationForm";

export default function AuthenticationForm({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

AuthenticationForm.SigninContainer = ({ children, ...restProps }) => {
  return <SigninContainer {...restProps}>{children}</SigninContainer>;
};

AuthenticationForm.SignupContainer = ({ children, ...restProps }) => {
  return <SignupContainer {...restProps}>{children}</SignupContainer>;
};

AuthenticationForm.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

AuthenticationForm.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

AuthenticationForm.Form = ({ children, ...restProps }) => {
  return <Form {...restProps}>{children}</Form>;
};

AuthenticationForm.Link = ({ children, ...restProps }) => {
  return <Link {...restProps}>{children}</Link>;
};

AuthenticationForm.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

AuthenticationForm.Input = ({ children, ...restProps }) => {
  return <Input {...restProps} />;
};

AuthenticationForm.Submit = ({ children, ...restProps }) => {
  return <Submit {...restProps}>{children}</Submit>;
};

AuthenticationForm.OverlayContainer = ({ children, ...restProps }) => {
  return <OverlayContainer {...restProps}>{children}</OverlayContainer>;
};

AuthenticationForm.Overlay = ({ children, ...restProps }) => {
  return <Overlay {...restProps}>{children}</Overlay>;
};

AuthenticationForm.OverlayTitle = ({ children, ...restProps }) => {
  return <OverlayTitle {...restProps}>{children}</OverlayTitle>;
};

AuthenticationForm.OverlayPanel = ({ children, ...restProps }) => {
  return <OverlayPanel {...restProps}>{children}</OverlayPanel>;
};

AuthenticationForm.OverlayLeft = ({ children, ...restProps }) => {
  return <OverlayLeft {...restProps}>{children}</OverlayLeft>;
};

AuthenticationForm.OverlayRight = ({ children, ...restProps }) => {
  return <OverlayRight {...restProps}>{children}</OverlayRight>;
};

AuthenticationForm.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

AuthenticationForm.SocialLinks = ({ children, ...restProps }) => {
  return <SocialLinks {...restProps}>{children}</SocialLinks>;
};
