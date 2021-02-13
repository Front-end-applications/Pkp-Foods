import React from "react";

import {
  HeaderContainer,
  NavBarContainer,
  WhatsappContainer,
  FooterContainer,
  AuthenticationContainer,
} from "../../containers/CustomerPortal";

export default function Authentication () {
  return (
    <HeaderContainer background="#EAEDED">
      <NavBarContainer background="transparent" color="black" />
      <AuthenticationContainer />
      <WhatsappContainer />
      <FooterContainer />
    </HeaderContainer>
  );
}
