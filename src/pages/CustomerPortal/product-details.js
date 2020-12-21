import React from "react";

import {
  HeaderContainer,
  NavBarContainer,
  ProductDetailsContainer,
  WhatsappContainer,
  FooterContainer,
} from "../../containers/CustomerPortal";

export default function ProductDetails({ ...restProps }) {
  return (
    <HeaderContainer background="#EAEDED">
      <NavBarContainer background="transparent" color="black" />
      <ProductDetailsContainer state={restProps.location.state} />
      <WhatsappContainer />
      <FooterContainer />
    </HeaderContainer>
  );
}
