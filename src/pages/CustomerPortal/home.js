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
} from "../../containers/CustomerPortal";

const viewCategories = ["Appalu", "Chikkis", "Mixtures", "Murruku", "Sweets"];

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
