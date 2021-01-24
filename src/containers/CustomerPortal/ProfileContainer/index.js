import React from "react";
import { FaFileAlt, FaHeart, FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";

import { Profile } from "../../../components/customerPortal"
import * as ROUTES from "../../../constants/routes";

export default function ProfileContainer() {
    return (
        <Profile>
            <Profile.Body>
                <Profile.SideBar>
                    <Profile.SideBarLinks to={ROUTES.CUSTOMER_PROFILE} className="active">Overview</Profile.SideBarLinks>
                    <Profile.SideBarLinks to={ROUTES.CUSTOMER_ORDERS}>Orders</Profile.SideBarLinks>
                    <Profile.SideBarLinks to={ROUTES.WISHLIST}>Wishlist</Profile.SideBarLinks>
                    <Profile.SideBarLinks to={ROUTES.CUSTOMER_PROFILE_ADDRESS}>Addresses</Profile.SideBarLinks>
                    <Profile.SideBarLinks to={ROUTES.GIFT_CARDS}>Gift cards</Profile.SideBarLinks>
                </Profile.SideBar>
                <Profile.MainContent>
                    <Profile.Header>
                        <Profile.HeaderImage src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiB2aWV3Qm94PSIwIDAgMTUwIDE1MCI+CiAgPGcgaWQ9Ikdyb3VwXzM0NTgiIGRhdGEtbmFtZT0iR3JvdXAgMzQ1OCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ5NSAtMjczKSI+CiAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzI3MDIiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDI3MDIiIHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0OTUgMjczKSIgZmlsbD0iI2JkNjQzNiIvPgogICAgPGcgaWQ9Ikdyb3VwXzMzNjAiIGRhdGEtbmFtZT0iR3JvdXAgMzM2MCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExLjk5NCAtMjEuNjExKSI+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzIzNjIiIGRhdGEtbmFtZT0iUGF0aCAyMzYyIiBkPSJNMTQ5OC4zNjYsOTAuODEyYTE5LjM3NCwxOS4zNzQsMCwxLDEtMTkuMzcyLTE5LjM3NiwxOS4zMDYsMTkuMzA2LDAsMCwxLDE5LjM3MiwxOS4zNzYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04OTYuNTUzIDI1Ny4xNzUpIiBmaWxsPSIjZjlmOGVmIi8+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzIzNjMiIGRhdGEtbmFtZT0iUGF0aCAyMzYzIiBkPSJNMTUzMS44MTQsMTIxLjY3M2EzOC43NTEsMzguNzUxLDAsMSwwLTc3LjUsMGg3Ny41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTExLjMxOCAyODkuMTQ1KSIgZmlsbD0iI2Y5ZjhlZiIgZmlsbC1ydWxlPSJldmVub2RkIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K" alt="FaUserAlt" />
                        <Profile.HeaderContent>
                            <Profile.UserName>Customer name</Profile.UserName>
                            <Profile.UserMail>Customer mail id</Profile.UserMail>
                        </Profile.HeaderContent>
                    </Profile.Header>
                    <Profile.HorizontalRule />
                    <Profile.CardContainer>
                        <Profile.Card to={ROUTES.CUSTOMER_ORDERS}>
                            <Profile.CardIcon>
                                <FaFileAlt />
                            </Profile.CardIcon>
                            <Profile.CardTitle>ORDERS</Profile.CardTitle>
                            <Profile.CardDesc>Check your order status</Profile.CardDesc>
                            <Profile.CardInfo>0 ACTIVE ORDERS</Profile.CardInfo>
                        </Profile.Card>
                        <Profile.Card to={ROUTES.WISHLIST}>
                            <Profile.CardIcon>
                                <FaHeart />
                            </Profile.CardIcon>
                            <Profile.CardTitle>Wishlist</Profile.CardTitle>
                            <Profile.CardDesc>View your wishlist</Profile.CardDesc>
                            <Profile.CardInfo>1 item in your wish list</Profile.CardInfo>
                        </Profile.Card>
                        <Profile.Card to={ROUTES.CUSTOMER_PROFILE_ADDRESS}>
                            <Profile.CardIcon>
                                <FaMapMarkerAlt />
                            </Profile.CardIcon>
                            <Profile.CardTitle>Addresses</Profile.CardTitle>
                            <Profile.CardDesc>View your addresses</Profile.CardDesc>
                            <Profile.CardInfo>Deliverable address</Profile.CardInfo>
                        </Profile.Card>
                    </Profile.CardContainer>
                </Profile.MainContent>
            </Profile.Body>
        </Profile>
    );
}
