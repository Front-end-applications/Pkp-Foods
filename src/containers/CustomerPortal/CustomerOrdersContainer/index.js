import React from "react";
import { FaFileAlt, FaHeart, FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";

import { CustomerOrders } from "../../../components/customerPortal"
import * as ROUTES from "../../../constants/routes";

export default function CustomerOrdersContainer() {
    return (
        <CustomerOrders>
            <CustomerOrders.Body>
                <CustomerOrders.SideBar>
                    <CustomerOrders.SideBarLinks to={ROUTES.CUSTOMER_PROFILE}>Overview</CustomerOrders.SideBarLinks>
                    <CustomerOrders.SideBarLinks to={ROUTES.CUSTOMER_ORDERS} className="active">Orders</CustomerOrders.SideBarLinks>
                    <CustomerOrders.SideBarLinks to={ROUTES.WISHLIST}>Wishlist</CustomerOrders.SideBarLinks>
                    <CustomerOrders.SideBarLinks to={ROUTES.CUSTOMER_PROFILE_ADDRESS}>Addresses</CustomerOrders.SideBarLinks>
                    <CustomerOrders.SideBarLinks to={ROUTES.GIFT_CARDS}>Gift cards</CustomerOrders.SideBarLinks>
                </CustomerOrders.SideBar>
                <CustomerOrders.MainContent>
                    <CustomerOrders.Header>
                        <CustomerOrders.HeaderTitle>Your orders</CustomerOrders.HeaderTitle>
                    </CustomerOrders.Header>

                    <CustomerOrders.CardContainer>
                        No orders found
                    </CustomerOrders.CardContainer>
                </CustomerOrders.MainContent>
            </CustomerOrders.Body>
        </CustomerOrders>
    );
}
