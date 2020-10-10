import React from "react";
import { FaShoppingCart } from "react-icons/fa";

import { Header } from "../components";

export default function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Banner>
        <Header.Inner>
          <Header.Link href="#">
            <FaShoppingCart />
            &nbsp;Cart
          </Header.Link>
          <Header.Link href="#">Login</Header.Link>
          <Header.Link href="#">Sign up</Header.Link>
          <Header.Select>
            <Header.Option>India</Header.Option>
          </Header.Select>
        </Header.Inner>
      </Header.Banner>
      <Header.Image src="/images/logo/pkp logo new png1.png" />
      {children}
    </Header>
  );
}
