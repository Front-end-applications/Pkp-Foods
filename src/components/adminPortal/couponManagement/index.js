import React from "react";

import {
    Container,
    Inner,
    Row,
    Column,
    Section,
    SectionTitle,
    Label,
    Text,
    Date,
    Select,
    Option,
    CreateButton,
    DeleteButton,
    Table,
    TableRow,
    TableHeader,
    TableData,
} from "./styles/couponManagement";

export default function CouponManagement({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}

CouponManagement.Row = ({ children, ...restProps }) => {
    return <Row {...restProps}>{children}</Row>
}

CouponManagement.Column = ({ children, ...restProps }) => {
    return <Column {...restProps}>{children}</Column>
}

CouponManagement.Section = ({ children, ...restProps }) => {
    return <Section {...restProps}>{children}</Section>
}

CouponManagement.SectionTitle = ({ children, ...restProps }) => {
    return <SectionTitle {...restProps}>{children}</SectionTitle>
}

CouponManagement.Label = ({ children, ...restProps }) => {
    return <Label {...restProps}>{children}</Label>
}

CouponManagement.Text = ({ ...restProps }) => {
    return (
        <>
            {restProps.label && (
                <Label>
                    {restProps.label}
                    {restProps.required && <span style={{ color: "red" }}>*</span>}{" "}
                </Label>
            )}
            <Text {...restProps} />
        </>
    )
}

CouponManagement.Date = ({ ...restProps }) => {
    return (
        <>
            {restProps.label && (
                <Label>
                    {restProps.label}
                    {restProps.required && <span style={{ color: "red" }}>*</span>}{" "}
                </Label>
            )}
            <Date {...restProps} />
        </>
    )
}

CouponManagement.Select = ({ children, ...restProps }) => {
    return (
        <>
            {restProps.label && (
                <Label>
                    {restProps.label}
                    {restProps.required && <span style={{ color: "red" }}>*</span>}{" "}
                </Label>
            )}
            <Select {...restProps}>{children}</Select>
        </>
    );
}

CouponManagement.Option = ({ children, ...restProps }) => {
    return <Option {...restProps}>{children}</Option>
}

CouponManagement.CreateButton = ({ children, ...restProps }) => {
    return <CreateButton {...restProps}>{children}</CreateButton>
}

CouponManagement.DeleteButton = ({ children, ...restProps }) => {
    return <DeleteButton {...restProps}>{children}</DeleteButton>
}

CouponManagement.Table = ({ children, ...restProps }) => {
    return <Table {...restProps}>{children}</Table>
}

CouponManagement.TableRow = ({ children, ...restProps }) => {
    return <TableRow {...restProps}>{children}</TableRow>
}

CouponManagement.TableHeader = ({ children, ...restProps }) => {
    return <TableHeader {...restProps}>{children}</TableHeader>
}

CouponManagement.TableData = ({ children, ...restProps }) => {
    return <TableData {...restProps}>{children}</TableData>
}