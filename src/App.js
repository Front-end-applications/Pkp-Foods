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
  Authentication,
} from "./pages/CustomerPortal";

import {
  ChildArticles,
  Orders,
  ParentArticles,
  Coupons,
  Categories
} from "./pages/AdminPortal";

import * as ROUTES from "./constants/routes";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes"
import { CartProvider } from "./context/shoppingCart";

function App() {
  const user = localStorage.getItem('user');
  console.log(user);
  return (
    <CartProvider>
      
      <Router>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.HOME}
          path="/signin"
          exact
        >

        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.HOME}
          path="/signup"
          exact
        >

        </IsUserRedirect>
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route exact path={ROUTES.ABOUT_US} component={AboutUs} />
        <Route exact path={ROUTES.COLLECTIONS} component={Collections} />
        <Route exact path={ROUTES.CONTACT_US} component={ContactUs} />
        <Route exact path={ROUTES.BLOG} component={Blog} />
        <Route exact path={ROUTES.COLLECTION_CATEGORY} component={Products} />
        <Route exact path={ROUTES.PRODUCTS} component={ProductDetails} />
        <Route exact path="/signin" component={Authentication} />

        <ProtectedRoute user={user} path={ROUTES.SHOPPING_CART} exact>
          <ShoppingCart />
        </ProtectedRoute>
        <ProtectedRoute user={user} path={ROUTES.CHECKOUT} exact>
          <Checkout />
        </ProtectedRoute>
        <ProtectedRoute user={user} path={ROUTES.PAYMENT} exact>
          <Payment />
        </ProtectedRoute>
        <ProtectedRoute user={user} path={ROUTES.CUSTOMER_PROFILE} exact>
          <Profile />
        </ProtectedRoute>
        <ProtectedRoute user={user} path={ROUTES.CUSTOMER_PROFILE_ADDRESS} exact>
          <ProfileAddress />
        </ProtectedRoute>
        <ProtectedRoute user={user} path={ROUTES.CUSTOMER_ORDERS} exact>
          <CustomerOrders />
        </ProtectedRoute>
        <ProtectedRoute user={user} path={ROUTES.WISHLIST} exact>
          <Wishlist />
        </ProtectedRoute>
        <ProtectedRoute user={user} path={ROUTES.GIFT_CARDS} exact>
          <GiftCards />
        </ProtectedRoute>

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
