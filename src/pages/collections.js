import React from "react";

import HeaderContainer from "../containers/HeaderContainer";
import NavBarContainer from "../containers/NavBarContainer";
import CollectionsContainer from "../containers/CollectionsContainer";
import BestSellersContainer from "../containers/BestSellersContainer";
import WhatsappContainer from "../containers/WhatsappLinkContainer";
import FooterContainer from "../containers/FooterContainer";

export default function Collections() {
  return (
    <HeaderContainer background="#EAEDED">
      <NavBarContainer background="transparent" color="black" />
      <CollectionsContainer />
      <BestSellersContainer />
      <WhatsappContainer />
      <FooterContainer />
    </HeaderContainer>
  );
}
