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
} from "./styles/customerOrders";

export default function CustomerOrders({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    );
}

CustomerOrders.Body = ({ children, ...restProps }) => {
    return <Body {...restProps}>{children}</Body>;
};

CustomerOrders.SideBar = ({ children, ...restProps }) => {
    return <SideBar {...restProps}>{children}</SideBar>;
};

CustomerOrders.SideBarLinks = ({ children, ...restProps }) => {
    return <SideBarLinks {...restProps}>{children}</SideBarLinks>;
};

CustomerOrders.MainContent = ({ children, ...restProps }) => {
    return <MainContent {...restProps}>{children}</MainContent>;
};

CustomerOrders.Header = ({ children, ...restProps }) => {
    return <Header {...restProps}>{children}</Header>;
};

CustomerOrders.HeaderTitle = ({ children, ...restProps }) => {
    return <HeaderTitle {...restProps}>{children}</HeaderTitle>;
};

CustomerOrders.HeaderContent = ({ children, ...restProps }) => {
    return <HeaderContent {...restProps}>{children}</HeaderContent>;
};

CustomerOrders.HorizontalRule = ({ ...restProps }) => {
    return <HorizontalRule {...restProps} />;
};

CustomerOrders.CardContainer = ({ children, ...restProps }) => {
    return <CardContainer {...restProps}>{children}</CardContainer>;
};

CustomerOrders.Card = ({ children, ...restProps }) => {
    return <Card {...restProps}>{children}</Card>;
};

CustomerOrders.CardIcon = ({ children, ...restProps }) => {
    return <CardIcon {...restProps}>{children}</CardIcon>;
};

CustomerOrders.CardTitle = ({ children, ...restProps }) => {
    return <CardTitle {...restProps}>{children}</CardTitle>;
};

CustomerOrders.CardDesc = ({ children, ...restProps }) => {
    return <CardDesc {...restProps}>{children}</CardDesc>;
};

CustomerOrders.CardInfo = ({ children, ...restProps }) => {
    return <CardInfo {...restProps}>{children}</CardInfo>;
};
