import React from "react";

import {
  HeaderContainer,
  NavBarContainer,
  PaymentContainer,
  WhatsappContainer,
  FooterContainer,
} from "../../containers/CustomerPortal";

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
