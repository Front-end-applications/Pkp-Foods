import React from "react";

import {
    Container,
    Inner,
    Body,
    SideBar,
    SideBarLinks,
    MainContent,
    Header,
    HeaderTitle,
    HeaderContent,
    HorizontalRule,
    CardContainer,
    Card,
    CardIcon,
    CardTitle,
    CardDesc,
    CardInfo,
} from "./styles/wishlist";

export default function Wishlist({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    );
}

Wishlist.Body = ({ children, ...restProps }) => {
    return <Body {...restProps}>{children}</Body>;
};

Wishlist.SideBar = ({ children, ...restProps }) => {
    return <SideBar {...restProps}>{children}</SideBar>;
};

Wishlist.SideBarLinks = ({ children, ...restProps }) => {
    return <SideBarLinks {...restProps}>{children}</SideBarLinks>;
};

Wishlist.MainContent = ({ children, ...restProps }) => {
    return <MainContent {...restProps}>{children}</MainContent>;
};

Wishlist.Header = ({ children, ...restProps }) => {
    return <Header {...restProps}>{children}</Header>;
};

Wishlist.HeaderTitle = ({ children, ...restProps }) => {
    return <HeaderTitle {...restProps}>{children}</HeaderTitle>;
};

Wishlist.HeaderContent = ({ children, ...restProps }) => {
    return <HeaderContent {...restProps}>{children}</HeaderContent>;
};

Wishlist.HorizontalRule = ({ ...restProps }) => {
    return <HorizontalRule {...restProps} />;
};

Wishlist.CardContainer = ({ children, ...restProps }) => {
    return <CardContainer {...restProps}>{children}</CardContainer>;
};

Wishlist.Card = ({ children, ...restProps }) => {
    return <Card {...restProps}>{children}</Card>;
};

Wishlist.CardIcon = ({ children, ...restProps }) => {
    return <CardIcon {...restProps}>{children}</CardIcon>;
};

Wishlist.CardTitle = ({ children, ...restProps }) => {
    return <CardTitle {...restProps}>{children}</CardTitle>;
};

Wishlist.CardDesc = ({ children, ...restProps }) => {
    return <CardDesc {...restProps}>{children}</CardDesc>;
};

Wishlist.CardInfo = ({ children, ...restProps }) => {
    return <CardInfo {...restProps}>{children}</CardInfo>;
};
