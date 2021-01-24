import React from "react";

import {
    Container,
    Inner,
    Body,
    SideBar,
    SideBarLinks,
    MainContent,
    Header,
    HeaderImage,
    HeaderContent,
    UserName,
    UserMail,
    HorizontalRule,
    CardContainer,
    Card,
    CardIcon,
    CardTitle,
    CardDesc,
    CardInfo,
} from "./styles/giftCards";

export default function GiftCards({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    );
}

GiftCards.Body = ({ children, ...restProps }) => {
    return <Body {...restProps}>{children}</Body>;
};

GiftCards.SideBar = ({ children, ...restProps }) => {
    return <SideBar {...restProps}>{children}</SideBar>;
};

GiftCards.SideBarLinks = ({ children, ...restProps }) => {
    return <SideBarLinks {...restProps}>{children}</SideBarLinks>;
};

GiftCards.MainContent = ({ children, ...restProps }) => {
    return <MainContent {...restProps}>{children}</MainContent>;
};

GiftCards.Header = ({ children, ...restProps }) => {
    return <Header {...restProps}>{children}</Header>;
};

GiftCards.HeaderImage = ({ ...restProps }) => {
    return <HeaderImage {...restProps} />;
};

GiftCards.HeaderContent = ({ children, ...restProps }) => {
    return <HeaderContent {...restProps}>{children}</HeaderContent>;
};

GiftCards.UserName = ({ children, ...restProps }) => {
    return <UserName {...restProps}>{children}</UserName>;
};

GiftCards.UserMail = ({ children, ...restProps }) => {
    return <UserMail {...restProps}>{children}</UserMail>;
};

GiftCards.HorizontalRule = ({ ...restProps }) => {
    return <HorizontalRule {...restProps} />;
};

GiftCards.CardContainer = ({ children, ...restProps }) => {
    return <CardContainer {...restProps}>{children}</CardContainer>;
};

GiftCards.Card = ({ children, ...restProps }) => {
    return <Card {...restProps}>{children}</Card>;
};

GiftCards.CardIcon = ({ children, ...restProps }) => {
    return <CardIcon {...restProps}>{children}</CardIcon>;
};

GiftCards.CardTitle = ({ children, ...restProps }) => {
    return <CardTitle {...restProps}>{children}</CardTitle>;
};

GiftCards.CardDesc = ({ children, ...restProps }) => {
    return <CardDesc {...restProps}>{children}</CardDesc>;
};

GiftCards.CardInfo = ({ children, ...restProps }) => {
    return <CardInfo {...restProps}>{children}</CardInfo>;
};
