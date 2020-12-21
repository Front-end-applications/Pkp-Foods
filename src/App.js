import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "normalize.css";

import {
  Home,
  AboutUs,
  Collections,
  Products,
  ContactUs,
  Blog,
  ProductDetails,
  ShoppingCart,
  Checkout,
  Payment,
} from "./pages/CustomerPortal";

import {
  ProductManagement,
  OrderManagement,
  CouponManagement,
} from "./pages/AdminPortal";

import * as ROUTES from "./constants/routes";
import { CartProvider } from "./context/shoppingCart";

function App() {
  return (
    <CartProvider>
      <Router>
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route exact path={ROUTES.ABOUT_US} component={AboutUs} />
        <Route exact path={ROUTES.COLLECTIONS} component={Collections} />
        <Route exact path={ROUTES.CONTACT_US} component={ContactUs} />
        <Route exact path={ROUTES.BLOG} component={Blog} />
        <Route exact path={ROUTES.COLLECTION_CATEGORY} component={Products} />
        <Route exact path={ROUTES.PRODUCTS} component={ProductDetails} />
        <Route exact path={ROUTES.SHOPPING_CART} component={ShoppingCart} />
        <Route exact path={ROUTES.CHECKOUT} component={Checkout} />
        <Route exact path={ROUTES.PAYMENT} component={Payment} />
        <Route exact path={ROUTES.ADMIN_PRODUCT_MANAGEMENT} component={ProductManagement} />
        <Route exact path={ROUTES.ADMIN_ORDER_MANAGEMENT} component={OrderManagement} />
        <Route exact path={ROUTES.ADMIN_COUPON_MANAGEMENT} component={CouponManagement} />
      </Router>
    </CartProvider>
  );
}

export default App;
