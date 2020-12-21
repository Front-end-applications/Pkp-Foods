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
    Table,
    TableRow,
    TableHeader,
    TableData,
} from "./styles/productManagement";

export default function ProductManagement({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}

ProductManagement.Row = ({ children, ...restProps }) => {
    return <Row {...restProps}>{children}</Row>
}

ProductManagement.Column = ({ children, ...restProps }) => {
    return <Column {...restProps}>{children}</Column>
}

ProductManagement.Section = ({ children, ...restProps }) => {
    return <Section {...restProps}>{children}</Section>
}

ProductManagement.SectionTitle = ({ children, ...restProps }) => {
    return <SectionTitle {...restProps}>{children}</SectionTitle>
}

ProductManagement.Label = ({ children, ...restProps }) => {
    return <Label {...restProps}>{children}</Label>
}

ProductManagement.Text = ({ ...restProps }) => {
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

ProductManagement.Date = ({ ...restProps }) => {
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

ProductManagement.Select = ({ children, ...restProps }) => {
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

ProductManagement.Option = ({ children, ...restProps }) => {
    return <Option {...restProps}>{children}</Option>
}

ProductManagement.CreateButton = ({ children, ...restProps }) => {
    return <CreateButton {...restProps}>{children}</CreateButton>
}

ProductManagement.Table = ({ children, ...restProps }) => {
    return <Table {...restProps}>{children}</Table>
}

ProductManagement.TableRow = ({ children, ...restProps }) => {
    return <TableRow {...restProps}>{children}</TableRow>
}

ProductManagement.TableHeader = ({ children, ...restProps }) => {
    return <TableHeader {...restProps}>{children}</TableHeader>
}

ProductManagement.TableData = ({ children, ...restProps }) => {
    return <TableData {...restProps}>{children}</TableData>
}
