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
  Profile,
  ProfileAddress,
  CustomerOrders,
  Wishlist,
  GiftCards,
} from "./pages/CustomerPortal";

import {
  ChildArticles,
  Orders,
  ParentArticles,
  Coupons,
  Categories
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
        <Route exact path={ROUTES.CUSTOMER_PROFILE} component={Profile} />
        <Route exact path={ROUTES.CUSTOMER_PROFILE_ADDRESS} component={ProfileAddress} />
        <Route exact path={ROUTES.CUSTOMER_ORDERS} component={CustomerOrders} />
        <Route exact path={ROUTES.WISHLIST} component={Wishlist} />
        <Route exact path={ROUTES.GIFT_CARDS} component={GiftCards} />

        <Route exact path={ROUTES.ADMIN_CHILD_ARTICLES} component={ChildArticles} />
        <Route exact path={ROUTES.ADMIN_PARENT_ARTICLES} component={ParentArticles} />
        <Route exact path={ROUTES.ADMIN_CATEGORIES} component={Categories} />
        <Route exact path={ROUTES.ADMIN_ORDERS} component={Orders} />
        <Route exact path={ROUTES.ADMIN_COUPONS} component={Coupons} />
      </Router>
    </CartProvider>
  );
}

export default App;
