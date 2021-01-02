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
} from "./styles/coupons";

export default function Coupons({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}

Coupons.Row = ({ children, ...restProps }) => {
    return <Row {...restProps}>{children}</Row>
}

Coupons.Column = ({ children, ...restProps }) => {
    return <Column {...restProps}>{children}</Column>
}

Coupons.Section = ({ children, ...restProps }) => {
    return <Section {...restProps}>{children}</Section>
}

Coupons.SectionTitle = ({ children, ...restProps }) => {
    return <SectionTitle {...restProps}>{children}</SectionTitle>
}

Coupons.Label = ({ children, ...restProps }) => {
    return <Label {...restProps}>{children}</Label>
}

Coupons.Text = ({ ...restProps }) => {
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

Coupons.Date = ({ ...restProps }) => {
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

Coupons.Select = ({ children, ...restProps }) => {
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

Coupons.Option = ({ children, ...restProps }) => {
    return <Option {...restProps}>{children}</Option>
}

Coupons.CreateButton = ({ children, ...restProps }) => {
    return <CreateButton {...restProps}>{children}</CreateButton>
}

Coupons.DeleteButton = ({ children, ...restProps }) => {
    return <DeleteButton {...restProps}>{children}</DeleteButton>
}

Coupons.Table = ({ children, ...restProps }) => {
    return <Table {...restProps}>{children}</Table>
}

Coupons.TableRow = ({ children, ...restProps }) => {
    return <TableRow {...restProps}>{children}</TableRow>
}

Coupons.TableHeader = ({ children, ...restProps }) => {
    return <TableHeader {...restProps}>{children}</TableHeader>
}

Coupons.TableData = ({ children, ...restProps }) => {
    return <TableData {...restProps}>{children}</TableData>
}