import React from "react";

import HeaderContainer from "../containers/HeaderContainer";
import JumbotronContainer from "../containers/JumbotronContainer";
import TickerContainer from "../containers/TickerContainer";
import NavBarContainer from "../containers/NavBarContainer";
import CarouselContainer from "../containers/CarouselContainer";
import CollectionsCardContainer from "../containers/CollectionsContainer";
import QualityStatementsContainer from "../containers/QualityStatementsContainer";
import InceptionContainer from "../containers/InceptionContainer";
import WhatsappContainer from "../containers/WhatsappLinkContainer";
import FooterContainer from "../containers/FooterContainer";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <JumbotronContainer />
        <TickerContainer />
        <NavBarContainer background="black"/>
        <CarouselContainer />
        <CollectionsCardContainer />
        <QualityStatementsContainer />
        <InceptionContainer />
        <WhatsappContainer />
        <FooterContainer />
      </HeaderContainer>
    </>
  );
}
