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

import {
  Error
} from "./pages/Common";

import * as ROUTES from "./constants/routes";
import * as ROLES from "./constants/UserRoles";
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
        <Route exact path="/error" component={Error} />

        <ProtectedRoute user={user} role={ROLES.ROLE_USER} path={ROUTES.SHOPPING_CART} exact>
          <ShoppingCart />
        </ProtectedRoute>
        <ProtectedRoute user={user} role={ROLES.ROLE_USER} path={ROUTES.CHECKOUT} exact>
          <Checkout />
        </ProtectedRoute>
        <ProtectedRoute user={user} role={ROLES.ROLE_USER} path={ROUTES.PAYMENT} exact>
          <Payment />
        </ProtectedRoute>
        <ProtectedRoute user={user} role={ROLES.ROLE_USER} path={ROUTES.CUSTOMER_PROFILE} exact>
          <Profile />
        </ProtectedRoute>
        <ProtectedRoute user={user} role={ROLES.ROLE_USER} path={ROUTES.CUSTOMER_PROFILE_ADDRESS} exact>
          <ProfileAddress />
        </ProtectedRoute>
        <ProtectedRoute user={user} role={ROLES.ROLE_USER} path={ROUTES.CUSTOMER_ORDERS} exact>
          <CustomerOrders />
        </ProtectedRoute>
        <ProtectedRoute user={user} role={ROLES.ROLE_USER} path={ROUTES.WISHLIST} exact>
          <Wishlist />
        </ProtectedRoute>
        <ProtectedRoute user={user} role={ROLES.ROLE_USER} path={ROUTES.GIFT_CARDS} exact>
          <GiftCards />
        </ProtectedRoute>

        <ProtectedRoute user={user} role={ROLES.ROLE_ADMIN} path={ROUTES.ADMIN_CHILD_ARTICLES} exact>
          <ChildArticles />
        </ProtectedRoute>
        <ProtectedRoute user={user} role={ROLES.ROLE_ADMIN} path={ROUTES.ADMIN_PARENT_ARTICLES} exact>
          <ParentArticles />
        </ProtectedRoute>
        <ProtectedRoute user={user} role={ROLES.ROLE_ADMIN} path={ROUTES.ADMIN_CATEGORIES} exact>
          <Categories />
        </ProtectedRoute>
        <ProtectedRoute user={user} role={ROLES.ROLE_ADMIN} path={ROUTES.ADMIN_ORDERS} exact>
          <Orders />
        </ProtectedRoute>
        <ProtectedRoute user={user} role={ROLES.ROLE_ADMIN} path={ROUTES.ADMIN_COUPONS} exact>
          <Coupons />
        </ProtectedRoute>
      </Router>
    </CartProvider>
  );
}

export default App;
