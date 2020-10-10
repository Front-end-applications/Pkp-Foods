import React from "react";

import HeaderContainer from "../containers/HeaderContainer";
import JumbotronContainer from "../containers/JumbotronContainer";
import TickerContainer from "../containers/TickerContainer";
import NavBarContainer from "../containers/NavBarContainer";
import ProductsContainer from "../containers/ProductCardContainer";
import WhatsappContainer from "../containers/WhatsappLinkContainer";
import FooterContainer from "../containers/FooterContainer";

export default function Products() {
  return (
    <>
      <HeaderContainer>
        <JumbotronContainer />
        <TickerContainer />
        <NavBarContainer />
        <ProductsContainer />
        <WhatsappContainer />
        <FooterContainer />
      </HeaderContainer>
    </>
  );
}
