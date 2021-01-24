import React from "react";

import {
  HeaderContainer,
  NavBarContainer,
  CustomerOrdersContainer,
  WhatsappContainer,
  FooterContainer,
} from "../../containers/CustomerPortal";

export default function CustomerOrders() {
  return (
    <HeaderContainer background="#EAEDED">
      <NavBarContainer background="transparent" color="black" />
      <CustomerOrdersContainer />
      <WhatsappContainer />
      <FooterContainer />
    </HeaderContainer>
  );
}
