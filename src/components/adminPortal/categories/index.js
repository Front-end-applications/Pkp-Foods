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
    EditDeleteButton,
    Table,
    TableRow,
    TableHeader,
    TableData,
} from "./styles/categories";

export default function Categories({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}

Categories.Row = ({ children, ...restProps }) => {
    return <Row {...restProps}>{children}</Row>
}

Categories.Column = ({ children, ...restProps }) => {
    return <Column {...restProps}>{children}</Column>
}

Categories.Section = ({ children, ...restProps }) => {
    return <Section {...restProps}>{children}</Section>
}

Categories.SectionTitle = ({ children, ...restProps }) => {
    return <SectionTitle {...restProps}>{children}</SectionTitle>
}

Categories.Label = ({ children, ...restProps }) => {
    return <Label {...restProps}>{children}</Label>
}

Categories.Text = ({ ...restProps }) => {
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

Categories.Date = ({ ...restProps }) => {
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

Categories.Select = ({ children, ...restProps }) => {
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

Categories.Option = ({ children, ...restProps }) => {
    return <Option {...restProps}>{children}</Option>
}

Categories.CreateButton = ({ children, ...restProps }) => {
    return <CreateButton {...restProps}>{children}</CreateButton>
}

Categories.EditDeleteButton = ({ children, ...restProps }) => {
    return <EditDeleteButton {...restProps}>{children}</EditDeleteButton>
}

Categories.Table = ({ children, ...restProps }) => {
    return <Table {...restProps}>{children}</Table>
}

Categories.TableRow = ({ children, ...restProps }) => {
    return <TableRow {...restProps}>{children}</TableRow>
}

Categories.TableHeader = ({ children, ...restProps }) => {
    return <TableHeader {...restProps}>{children}</TableHeader>
}

Categories.TableData = ({ children, ...restProps }) => {
    return <TableData {...restProps}>{children}</TableData>
}
