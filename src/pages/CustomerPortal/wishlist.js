import React from "react";

import {
  HeaderContainer,
  NavBarContainer,
  WishlistContainer,
  WhatsappContainer,
  FooterContainer,
} from "../../containers/CustomerPortal";

export default function Wishlist() {
  return (
    <HeaderContainer background="#EAEDED">
      <NavBarContainer background="transparent" color="black" />
      <WishlistContainer />
      <WhatsappContainer />
      <FooterContainer />
    </HeaderContainer>
  );
}
