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
} from "./styles/profileAddress";

export default function ProfileAddress({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    );
}

ProfileAddress.Body = ({ children, ...restProps }) => {
    return <Body {...restProps}>{children}</Body>;
};

ProfileAddress.SideBar = ({ children, ...restProps }) => {
    return <SideBar {...restProps}>{children}</SideBar>;
};

ProfileAddress.SideBarLinks = ({ children, ...restProps }) => {
    return <SideBarLinks {...restProps}>{children}</SideBarLinks>;
};

ProfileAddress.MainContent = ({ children, ...restProps }) => {
    return <MainContent {...restProps}>{children}</MainContent>;
};

ProfileAddress.Header = ({ children, ...restProps }) => {
    return <Header {...restProps}>{children}</Header>;
};

ProfileAddress.HeaderTitle = ({ children, ...restProps }) => {
    return <HeaderTitle {...restProps}>{children}</HeaderTitle>;
};

ProfileAddress.HeaderContent = ({ children, ...restProps }) => {
    return <HeaderContent {...restProps}>{children}</HeaderContent>;
};

ProfileAddress.HorizontalRule = ({ ...restProps }) => {
    return <HorizontalRule {...restProps} />;
};

ProfileAddress.CardContainer = ({ children, ...restProps }) => {
    return <CardContainer {...restProps}>{children}</CardContainer>;
};

ProfileAddress.Card = ({ children, ...restProps }) => {
    return <Card {...restProps}>{children}</Card>;
};

ProfileAddress.CardIcon = ({ children, ...restProps }) => {
    return <CardIcon {...restProps}>{children}</CardIcon>;
};

ProfileAddress.CardTitle = ({ children, ...restProps }) => {
    return <CardTitle {...restProps}>{children}</CardTitle>;
};

ProfileAddress.CardDesc = ({ children, ...restProps }) => {
    return <CardDesc {...restProps}>{children}</CardDesc>;
};

ProfileAddress.CardInfo = ({ children, ...restProps }) => {
    return <CardInfo {...restProps}>{children}</CardInfo>;
};
