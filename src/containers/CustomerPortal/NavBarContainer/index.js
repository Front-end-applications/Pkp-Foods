import React from "react";

import { NavBar } from "../../../components/customerPortal";
import * as ROUTES from "../../../constants/routes";

export default function NavBarContainer({ ...restProps }) {
  return (
    <NavBar {...restProps}>
      <NavBar.Link to={ROUTES.ABOUT_US}>About us</NavBar.Link>
      <NavBar.Link to={ROUTES.COLLECTIONS}>Products</NavBar.Link>
      <NavBar.Link to={ROUTES.CONTACT_US}>Contact us</NavBar.Link>
      <NavBar.Link to={ROUTES.BLOG}>Blog</NavBar.Link>
    </NavBar>
  );
}
