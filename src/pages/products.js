import React from "react";

import HeaderContainer from "../containers/HeaderContainer";
import NavBarContainer from "../containers/NavBarContainer";
import ProductsContainer from "../containers/ProductsContainer";
import WhatsappContainer from "../containers/WhatsappLinkContainer";
import FooterContainer from "../containers/FooterContainer";

export default function Products() {
  return (
    <>
      <HeaderContainer background="#EAEDED">
        <NavBarContainer background="transparent" color="black" />
        <ProductsContainer />
        <WhatsappContainer />
        <FooterContainer />
      </HeaderContainer>
    </>
  );
}
