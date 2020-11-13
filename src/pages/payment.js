import React from "react";

import {
  HeaderContainer,
  NavBarContainer,
  PaymentContainer,
  WhatsappContainer,
  FooterContainer,
} from "../containers";

export default function Payment() {
  return (
    <HeaderContainer background="#EAEDED">
      <NavBarContainer background="transparent" color="black" />
      <PaymentContainer />
      <WhatsappContainer />
      <FooterContainer />
    </HeaderContainer>
  );
}
