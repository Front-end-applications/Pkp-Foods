import React from "react";

import HeaderContainer from "../containers/HeaderContainer";
import NavBarContainer from "../containers/NavBarContainer";
import AboutUsContainer from "../containers/AboutUsContainer";
import WhatsappContainer from "../containers/WhatsappLinkContainer";
import FooterContainer from "../containers/FooterContainer";

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
