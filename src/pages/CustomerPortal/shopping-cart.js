import React from "react";

import {
  HeaderContainer,
  NavBarContainer,
  WhatsappContainer,
  FooterContainer,
  ShoppingCartContainer,
} from "../../containers/CustomerPortal";

export default function ShoppingCart() {
  return (
    <HeaderContainer background="#EAEDED">
      <NavBarContainer background="transparent" color="black" />
      <ShoppingCartContainer />
      <WhatsappContainer />
      <FooterContainer />
    </HeaderContainer>
  );
}
