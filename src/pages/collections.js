import React from "react";

import {
  HeaderContainer,
  NavBarContainer,
  CollectionsCardContainer,
  BestSellersContainer,
  WhatsappContainer,
  FooterContainer,
} from "../containers";

export default function Collections() {
  return (
    <HeaderContainer background="#EAEDED">
      <NavBarContainer background="transparent" color="black" />
      <CollectionsCardContainer />
      <BestSellersContainer />
      <WhatsappContainer />
      <FooterContainer />
    </HeaderContainer>
  );
}
