import React from "react";

import HeaderContainer from "../containers/HeaderContainer";
import NavBarContainer from "../containers/NavBarContainer";
import PaymentContainer from "../containers/PaymentContainer";
import WhatsappContainer from "../containers/WhatsappLinkContainer";
import FooterContainer from "../containers/FooterContainer";

export default function Payment() {
  return (
    <HeaderContainer background="#EAEDED">
      <NavBarContainer background="transparent" color="black" />
      <PaymentContainer />
      <WhatsappContainer />
      <FooterContainer />
    </HeaderContainer>
  );
}
