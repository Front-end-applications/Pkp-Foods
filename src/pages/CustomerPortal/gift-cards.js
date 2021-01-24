import React from "react";

import {
  HeaderContainer,
  NavBarContainer,
  GiftCardsContainer,
  WhatsappContainer,
  FooterContainer,
} from "../../containers/CustomerPortal";

export default function GiftCards() {
  return (
    <HeaderContainer background="#EAEDED">
      <NavBarContainer background="transparent" color="black" />
      <GiftCardsContainer />
      <WhatsappContainer />
      <FooterContainer />
    </HeaderContainer>
  );
}
