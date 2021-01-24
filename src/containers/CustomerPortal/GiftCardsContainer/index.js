import React from "react";
import { FaFileAlt, FaHeart, FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";

import { GiftCards } from "../../../components/customerPortal"
import * as ROUTES from "../../../constants/routes";

export default function GiftCardsContainer() {
    return (
        <GiftCards>
            <GiftCards.Body>
                <GiftCards.SideBar>
                    <GiftCards.SideBarLinks to={ROUTES.CUSTOMER_PROFILE}>Overview</GiftCards.SideBarLinks>
                    <GiftCards.SideBarLinks to={ROUTES.CUSTOMER_ORDERS}>Orders</GiftCards.SideBarLinks>
                    <GiftCards.SideBarLinks to={ROUTES.WISHLIST}>Wishlist</GiftCards.SideBarLinks>
                    <GiftCards.SideBarLinks to={ROUTES.CUSTOMER_PROFILE_ADDRESS}>Addresses</GiftCards.SideBarLinks>
                    <GiftCards.SideBarLinks to={ROUTES.GIFT_CARDS} className="active">Gift cards</GiftCards.SideBarLinks>
                </GiftCards.SideBar>
                <GiftCards.MainContent>
                   
                </GiftCards.MainContent>
            </GiftCards.Body>
        </GiftCards>
    );
}
