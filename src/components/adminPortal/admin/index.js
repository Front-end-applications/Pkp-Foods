import React from "react";

import { Container, Inner, Tabs, Tab, TabTitle, Page } from "./styles/admin";

export default function Admin({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    );
}

Admin.Tabs = ({ children, ...restProps }) => {
    return <Tabs {...restProps}>{children}</Tabs>;
};

Admin.Tab = ({ children, ...restProps }) => {
    return <Tab {...restProps}>{children}</Tab>;
};

Admin.TabTitle = ({ children, ...restProps }) => {
    return <TabTitle {...restProps}>{children}</TabTitle>;
};

Admin.Page = ({ children, ...restProps }) => {
    return <Page {...restProps}>{children}</Page>;
};

