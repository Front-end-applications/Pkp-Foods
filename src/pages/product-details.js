import React from "react";

import HeaderContainer from "../containers/HeaderContainer";
import NavBarContainer from "../containers/NavBarContainer";
import ProductDetailsContainer from "../containers/ProductDetailContainer";
import WhatsappContainer from "../containers/WhatsappLinkContainer";
import FooterContainer from "../containers/FooterContainer";

export default function ProductDetails({ ...restProps }) {
  return (
    <>
      <HeaderContainer background="#EAEDED">
        <NavBarContainer background="transparent" color="black" />
        <ProductDetailsContainer state={restProps.location.state} />
        <WhatsappContainer />
        <FooterContainer />
      </HeaderContainer>
    </>
  );
}
