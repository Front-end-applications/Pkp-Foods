import React from "react";

import {
  HeaderContainer,
  NavBarContainer,
  WhatsappContainer,
  FooterContainer,
} from "../../containers/CustomerPortal";

export default function Home() {
  return (
    <HeaderContainer background="#EAEDED">
      <NavBarContainer background="transparent" color="black" />
      <div>Welcome to blog page!</div>
      <WhatsappContainer />
      <FooterContainer />
    </HeaderContainer>
  );
}
