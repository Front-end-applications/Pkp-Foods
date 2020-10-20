import React, { useState } from "react";
import { FaShoppingCart, FaMapMarkerAlt } from "react-icons/fa";

import { Header } from "../components";
import PincodeModalContainer from "./PincodeModalContainer";
import * as ROUTES from "../constants/routes";

export default function HeaderContainer({ children }) {
  const [showPinCode, setShowPinCode] = useState(true);

  return (
    <>
      <Header>
        <Header.Banner>
          <Header.Inner>
            <Header.Link onClick={() => setShowPinCode(true)}>
              <FaMapMarkerAlt />
              &nbsp;Pincode
            </Header.Link>
            <Header.Link href="#">
              <FaShoppingCart />
              &nbsp;Cart
            </Header.Link>
            <Header.Link>Login</Header.Link>
            <Header.Link>Sign up</Header.Link>
            <Header.Select>
              <Header.Option>India</Header.Option>
            </Header.Select>
          </Header.Inner>
        </Header.Banner>
        <Header.Image
          to={ROUTES.HOME}
          src="/images/logo/pkp logo new png1.png"
        />

        <PincodeModalContainer
          show={showPinCode}
          closeModal={() => setShowPinCode(false)}
        />

        {children}
      </Header>
    </>
  );
}
