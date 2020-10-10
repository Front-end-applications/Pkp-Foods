import React from "react";

import HeaderContainer from "../containers/HeaderContainer";
import JumbotronContainer from "../containers/JumbotronContainer";
import TickerContainer from "../containers/TickerContainer";
import NavBarContainer from "../containers/NavBarContainer";
import AboutUsContainer from '../containers/AboutUsContainer'
import WhatsappContainer from "../containers/WhatsappLinkContainer";
import FooterContainer from "../containers/FooterContainer";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <JumbotronContainer />
        <TickerContainer />
        <NavBarContainer />
        <AboutUsContainer />
        <WhatsappContainer />
        <FooterContainer />
      </HeaderContainer>
    </>
  );
}
