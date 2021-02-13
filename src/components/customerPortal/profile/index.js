import React from "react";

import {
    Container,
    Inner,
    Body,
    SideBar,
    SideBarLinks,
    Button,
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
} from "./styles/profile";

export default function Profile({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    );
}

Profile.Body = ({ children, ...restProps }) => {
    return <Body {...restProps}>{children}</Body>;
};

Profile.SideBar = ({ children, ...restProps }) => {
    return <SideBar {...restProps}>{children}</SideBar>;
};

Profile.SideBarLinks = ({ children, ...restProps }) => {
    return <SideBarLinks {...restProps}>{children}</SideBarLinks>;
};

Profile.Button = ({ children, ...restProps }) => {
    return <Button {...restProps}>{children}</Button>;
};

Profile.MainContent = ({ children, ...restProps }) => {
    return <MainContent {...restProps}>{children}</MainContent>;
};

Profile.Header = ({ children, ...restProps }) => {
    return <Header {...restProps}>{children}</Header>;
};

Profile.HeaderImage = ({ ...restProps }) => {
    return <HeaderImage {...restProps} />;
};

Profile.HeaderContent = ({ children, ...restProps }) => {
    return <HeaderContent {...restProps}>{children}</HeaderContent>;
};

Profile.UserName = ({ children, ...restProps }) => {
    return <UserName {...restProps}>{children}</UserName>;
};

Profile.UserMail = ({ children, ...restProps }) => {
    return <UserMail {...restProps}>{children}</UserMail>;
};

Profile.HorizontalRule = ({ ...restProps }) => {
    return <HorizontalRule {...restProps} />;
};

Profile.CardContainer = ({ children, ...restProps }) => {
    return <CardContainer {...restProps}>{children}</CardContainer>;
};

Profile.Card = ({ children, ...restProps }) => {
    return <Card {...restProps}>{children}</Card>;
};

Profile.CardIcon = ({ children, ...restProps }) => {
    return <CardIcon {...restProps}>{children}</CardIcon>;
};

Profile.CardTitle = ({ children, ...restProps }) => {
    return <CardTitle {...restProps}>{children}</CardTitle>;
};

Profile.CardDesc = ({ children, ...restProps }) => {
    return <CardDesc {...restProps}>{children}</CardDesc>;
};

Profile.CardInfo = ({ children, ...restProps }) => {
    return <CardInfo {...restProps}>{children}</CardInfo>;
};
