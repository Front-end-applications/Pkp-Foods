import React from "react";

import {
  HeaderContainer,
  NavBarContainer,
  ProfileAddressContainer,
  WhatsappContainer,
  FooterContainer,
} from "../../containers/CustomerPortal";

export default function ProfileAddress() {
  return (
    <HeaderContainer background="#EAEDED">
      <NavBarContainer background="transparent" color="black" />
      <ProfileAddressContainer />
      <WhatsappContainer />
      <FooterContainer />
    </HeaderContainer>
  );
}
