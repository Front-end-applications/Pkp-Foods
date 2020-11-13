import React from "react";

import {
  HeaderContainer,
  JumbotronContainer,
  TickerContainer,
  NavBarContainer,
  CarouselContainer,
  CollectionsCardContainer,
  QualityStatementsContainer,
  InceptionContainer,
  WhatsappContainer,
  FooterContainer,
} from "../containers";

const viewCategories = ["Card Title", "Card Title 2"];

export default function Home() {
  return (
    <HeaderContainer>
      <JumbotronContainer />
      <TickerContainer />
      <NavBarContainer background="black" />
      <CarouselContainer />
      <CollectionsCardContainer
        title="Discover our collections"
        viewCategories={viewCategories}
      />
      <QualityStatementsContainer />
      <InceptionContainer />
      <WhatsappContainer />
      <FooterContainer />
    </HeaderContainer>
  );
}
