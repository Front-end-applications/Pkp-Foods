import React from "react";
import { FaFileAlt, FaHeart, FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";

import { Wishlist } from "../../../components/customerPortal"
import * as ROUTES from "../../../constants/routes";

export default function WishlistContainer() {
    return (
        <Wishlist>
            <Wishlist.Body>
                <Wishlist.SideBar>
                    <Wishlist.SideBarLinks to={ROUTES.CUSTOMER_PROFILE}>Overview</Wishlist.SideBarLinks>
                    <Wishlist.SideBarLinks to={ROUTES.CUSTOMER_ORDERS}>Orders</Wishlist.SideBarLinks>
                    <Wishlist.SideBarLinks to={ROUTES.WISHLIST} className="active">Wishlist</Wishlist.SideBarLinks>
                    <Wishlist.SideBarLinks to={ROUTES.CUSTOMER_PROFILE_ADDRESS}>Addresses</Wishlist.SideBarLinks>
                    <Wishlist.SideBarLinks to={ROUTES.GIFT_CARDS}>Gift cards</Wishlist.SideBarLinks>
                </Wishlist.SideBar>
                <Wishlist.MainContent>
                    <Wishlist.Header>
                        <Wishlist.HeaderTitle>Wishlist</Wishlist.HeaderTitle>
                    </Wishlist.Header>

                    <Wishlist.CardContainer>
                        Your wishlist is empty
                    </Wishlist.CardContainer>
                </Wishlist.MainContent>
            </Wishlist.Body>
        </Wishlist>
    );
}
