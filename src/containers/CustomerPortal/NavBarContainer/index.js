import React, { useState, useEffect } from "react";

import { NavBar } from "../../../components/customerPortal";
import * as SERVICES from "./NavBarServices";
import * as ROUTES from "../../../constants/routes";

export default function NavBarContainer({ ...restProps }) {

  const [hoverLink, setHoverLink] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    SERVICES.fetchCategories(setCategories);
  }, []);

  return (
    <div onMouseLeave={event => SERVICES.handleMouseLeave(event, setHoverLink)}>
      <NavBar {...restProps}>
        <NavBar.Link
          to={ROUTES.ABOUT_US}
          onMouseEnter={event => SERVICES.handleMouseEnter(event, setHoverLink)}
        >About us</NavBar.Link>
        <NavBar.Link
          to={ROUTES.COLLECTIONS}
          onMouseEnter={event => SERVICES.handleMouseEnter(event, setHoverLink)}
        >Products</NavBar.Link>
        <NavBar.Link
          to={ROUTES.CONTACT_US}
          onMouseEnter={event => SERVICES.handleMouseEnter(event, setHoverLink)}
        >Contact us</NavBar.Link>
        <NavBar.Link
          to={ROUTES.BLOG}
          onMouseEnter={event => SERVICES.handleMouseEnter(event, setHoverLink)}
        >Blog</NavBar.Link>
      </NavBar>

      <NavBar {...restProps} style={{ display: ((hoverLink === "Products") ? "block" : "none") }}>
        {categories.map((category, index) => (
          <NavBar.Link
            key={index}
            to={{
              pathname: `/collections/${category.familyName}`,
              state: category,
            }}
          >{category.familyName}</NavBar.Link>
        ))}
      </NavBar>
    </div>
  );
}
