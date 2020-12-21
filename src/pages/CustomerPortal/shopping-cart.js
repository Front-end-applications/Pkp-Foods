import React from "react";

import {
  HeaderContainer,
  NavBarContainer,
  WhatsappContainer,
  FooterContainer,
  ShoppingCartContainer,
} from "../../containers/CustomerPortal";

export default function ShoppingCart({ ...restProps }) {
  return (
    <HeaderContainer background="#EAEDED">
      <NavBarContainer background="transparent" color="black" />
      <ShoppingCartContainer />
      <WhatsappContainer />
      <FooterContainer />
    </HeaderContainer>
  );
}
