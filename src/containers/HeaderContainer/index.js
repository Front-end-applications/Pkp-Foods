import React, { useState } from "react";
import { FaShoppingCart, FaMapMarkerAlt } from "react-icons/fa";

import { Header } from "../../components";
import PincodeModalContainer from "../PincodeModalContainer";
import * as ROUTES from "../../constants/routes";

export default function HeaderContainer({ children, ...restProps }) {
  const [showPinCode, setShowPinCode] = useState(false);

  return (
    <>
      <Header {...restProps}>
        <Header.Banner>
          <Header.Inner>
            <Header.ReactLink to={ROUTES.SHOPPING_CART}>
              <FaShoppingCart />
              &nbsp;Cart
            </Header.ReactLink>
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

        <Header.Pincode>
          <Header.Link onClick={() => setShowPinCode(true)}>
            <FaMapMarkerAlt size={24} />
            <span>
              Hello
              <br />
              <b>Enter your location</b>
            </span>
          </Header.Link>
        </Header.Pincode>
        <PincodeModalContainer
          show={showPinCode}
          closeModal={() => setShowPinCode(false)}
        />
        {children}
      </Header>
    </>
  );
}
