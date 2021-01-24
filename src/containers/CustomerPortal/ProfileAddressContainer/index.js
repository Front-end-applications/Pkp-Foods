import React from "react";
import { FaFileAlt, FaHeart, FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";

import { Profile, ProfileAddress } from "../../../components/customerPortal"
import * as ROUTES from "../../../constants/routes";

export default function ProfileAddressContainer() {
    return (
        <ProfileAddress>
            <ProfileAddress.Body>
                <ProfileAddress.SideBar>
                    <ProfileAddress.SideBarLinks to={ROUTES.CUSTOMER_PROFILE}>Overview</ProfileAddress.SideBarLinks>
                    <ProfileAddress.SideBarLinks to={ROUTES.CUSTOMER_ORDERS}>Orders</ProfileAddress.SideBarLinks>
                    <ProfileAddress.SideBarLinks to={ROUTES.WISHLIST}>Wishlist</ProfileAddress.SideBarLinks>
                    <ProfileAddress.SideBarLinks to={ROUTES.CUSTOMER_PROFILE_ADDRESS} className="active">Addresses</ProfileAddress.SideBarLinks>
                    <ProfileAddress.SideBarLinks to={ROUTES.GIFT_CARDS}>Gift cards</ProfileAddress.SideBarLinks>
                </ProfileAddress.SideBar>
                <ProfileAddress.MainContent>
                    <ProfileAddress.Header>
                        <ProfileAddress.HeaderTitle>Saved Addresses</ProfileAddress.HeaderTitle>
                        <ProfileAddress.HeaderContent>Address</ProfileAddress.HeaderContent>
                    </ProfileAddress.Header>

                    <ProfileAddress.CardContainer>
                        You have no addresses saved
                    </ProfileAddress.CardContainer>
                </ProfileAddress.MainContent>
            </ProfileAddress.Body>
        </ProfileAddress>
    );
}
