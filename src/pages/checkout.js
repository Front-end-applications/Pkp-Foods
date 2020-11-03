import React from "react";

import HeaderContainer from "../containers/HeaderContainer";
import NavBarContainer from "../containers/NavBarContainer";
import CheckoutContainer from "../containers/CheckoutContainer";
import WhatsappContainer from "../containers/WhatsappLinkContainer";
import FooterContainer from "../containers/FooterContainer";

export default function Checkout() {
  return (
    <>
      <HeaderContainer background="#EAEDED">
        <NavBarContainer background="transparent" color="black" />
        <CheckoutContainer />
        <WhatsappContainer />
        <FooterContainer />
      </HeaderContainer>
    </>
  );
}
