import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "normalize.css";

import { Home, AboutUs, Products, ContactUs, Blog } from "./pages";
import * as ROUTES from "./constants/routes";
import AuthenticationContainer from "./containers/AuthenticationContainer";

function App() {
  return (
    <>
      <Router>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
        <Route exact path={ROUTES.ABOUT_US}>
          <AboutUs />
        </Route>
        <Route exact path={ROUTES.PRODUCTS}>
          <Products />
        </Route>
        <Route exact path={ROUTES.CONTACT_US}>
          <ContactUs />
        </Route>
        <Route exact path={ROUTES.BLOG}>
          <Blog />
        </Route>
      </Router>
    </>
  );
}

export default App;
