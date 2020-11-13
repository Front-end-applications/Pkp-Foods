import React from "react";

import {
  HeaderContainer,
  NavBarContainer,
  CheckoutContainer,
  WhatsappContainer,
  FooterContainer,
} from "../containers";

export default function Checkout() {
  return (
    <HeaderContainer background="#EAEDED">
      <NavBarContainer background="transparent" color="black" />
      <CheckoutContainer />
      <WhatsappContainer />
      <FooterContainer />
    </HeaderContainer>
  );
}
