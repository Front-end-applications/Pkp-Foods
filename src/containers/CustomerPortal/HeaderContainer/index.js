import React, { useState } from "react";
import { FaShoppingCart, FaMapMarkerAlt, FaUser } from "react-icons/fa";

import { Header } from "../../../components/customerPortal";
import PincodeModalContainer from "../PincodeModalContainer";
import * as ROUTES from "../../../constants/routes";

export default function HeaderContainer({ children, ...restProps }) {
  const [showPinCode, setShowPinCode] = useState(false);

  return (
    <>
      <Header {...restProps}>
        <Header.Banner>
          <Header.Inner>
            <Header.ReactLink to={ROUTES.SHOPPING_CART}>
              <FaShoppingCart />
            </Header.ReactLink>
            {/* <Header.Link>Sign In | Register</Header.Link> */}
            <Header.ReactLink to={ROUTES.CUSTOMER_PROFILE}>
              <FaUser />
            </Header.ReactLink>
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
