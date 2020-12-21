import React from "react";

import {
  HeaderContainer,
  NavBarContainer,
  ProductsContainer,
  WhatsappContainer,
  FooterContainer,
} from "../../containers/CustomerPortal";

export default function Products() {
  return (
    <HeaderContainer background="#EAEDED">
      <NavBarContainer background="transparent" color="black" />
      <ProductsContainer />
      <WhatsappContainer />
      <FooterContainer />
    </HeaderContainer>
  );
}
