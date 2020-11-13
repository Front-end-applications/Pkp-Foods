import React from "react";

import {
  HeaderContainer,
  NavBarContainer,
  WhatsappContainer,
  FooterContainer,
} from "../containers";

export default function Home() {
  return (
    <HeaderContainer background="#EAEDED">
      <NavBarContainer background="transparent" color="black" />
      <div>Welcome to contact us Page!</div>
      <WhatsappContainer />
      <FooterContainer />
    </HeaderContainer>
  );
}
