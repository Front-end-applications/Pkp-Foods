import React from "react";

import {
  HeaderContainer,
  NavBarContainer,
  ProfileContainer,
  WhatsappContainer,
  FooterContainer,
} from "../../containers/CustomerPortal";

export default function Profile() {
  return (
    <HeaderContainer background="#EAEDED">
      <NavBarContainer background="transparent" color="black" />
      <ProfileContainer />
      <WhatsappContainer />
      <FooterContainer />
    </HeaderContainer>
  );
}
