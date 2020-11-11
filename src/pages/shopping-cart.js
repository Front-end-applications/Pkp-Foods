import React from "react";

import HeaderContainer from "../containers/HeaderContainer";
import NavBarContainer from "../containers/NavBarContainer";
import WhatsappContainer from "../containers/WhatsappLinkContainer";
import FooterContainer from "../containers/FooterContainer";
import ShoppingCartContainer from "../containers/ShoppingCartContainer";

export default function ShoppingCart({ ...restProps }) {
  return (
    <HeaderContainer background="#EAEDED">
      <NavBarContainer background="transparent" color="black" />
      <ShoppingCartContainer />
      <WhatsappContainer />
      <FooterContainer />
    </HeaderContainer>
  );
}
