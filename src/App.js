import React from "react";
import "normalize.css";

import HeaderContainer from "./containers/HeaderContainer";
import JumbotronContainer from "./containers/JumbotronContainer";
import NavBarContainer from "./containers/NavBarContainer";
import TickerContainer from "./containers/TickerContainer";
import FooterContainer from "./containers/FooterContainer";
import CarouselContainer from "./containers/CarouselContainer";
// import ProductCardContainer from "./containers/ProductCardContainer";
import CollectionsCardContainer from "./containers/CollectionsContainer";
import QualityStatementsContainer from "./containers/QualityStatementsContainer";
import InceptionContainer from "./containers/InceptionContainer";
import WhatsappContainer from "./containers/WhatsappLinkContainer";

function App() {
  return (
    <>
      <HeaderContainer />
      <JumbotronContainer />
      <NavBarContainer />
      <TickerContainer />
      <CarouselContainer />
      <CollectionsCardContainer />
      <QualityStatementsContainer />
      <InceptionContainer />
      <WhatsappContainer />
      <FooterContainer />
    </>

    // <>
    //     <HeaderContainer />
    //     <JumbotronContainer />
    //     <NavBarContainer />
    //     <ProductCardContainer />
    //     <WhatsappContainer />
    //     <FooterContainer />
    // </>
  );
}

export default App;
