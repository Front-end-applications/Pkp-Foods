import React from "react";

import {
  HeaderContainer,
  NavBarContainer,
  AboutUsContainer,
  WhatsappContainer,
  FooterContainer,
} from "../../containers/CustomerPortal";

export default function Home() {
  return (
    <HeaderContainer background="#EAEDED">
      <NavBarContainer background="transparent" color="black" />
      <AboutUsContainer />
      <WhatsappContainer />
      <FooterContainer />
    </HeaderContainer>
  );
}
