import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "normalize.css";

import { Home, AboutUs, Collections, Products, ContactUs, Blog } from "./pages";
import * as ROUTES from "./constants/routes";

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
        <Route exact path={ROUTES.COLLECTIONS}>
          <Collections />
        </Route>
        <Route exact path={ROUTES.CONTACT_US}>
          <ContactUs />
        </Route>
        <Route exact path={ROUTES.BLOG}>
          <Blog />
        </Route>
        <Route exact path={ROUTES.PRODUCTS }>
          <Products />
        </Route>
      </Router>
    </>
  );
}

export default App;
