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
} from "./styles/childArticles";

export default function ChildArticles({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}

ChildArticles.Row = ({ children, ...restProps }) => {
    return <Row {...restProps}>{children}</Row>
}

ChildArticles.Column = ({ children, ...restProps }) => {
    return <Column {...restProps}>{children}</Column>
}

ChildArticles.Section = ({ children, ...restProps }) => {
    return <Section {...restProps}>{children}</Section>
}

ChildArticles.SectionTitle = ({ children, ...restProps }) => {
    return <SectionTitle {...restProps}>{children}</SectionTitle>
}

ChildArticles.Label = ({ children, ...restProps }) => {
    return <Label {...restProps}>{children}</Label>
}

ChildArticles.Text = ({ ...restProps }) => {
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

ChildArticles.Date = ({ ...restProps }) => {
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

ChildArticles.Select = ({ children, ...restProps }) => {
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

ChildArticles.Option = ({ children, ...restProps }) => {
    return <Option {...restProps}>{children}</Option>
}

ChildArticles.CreateButton = ({ children, ...restProps }) => {
    return <CreateButton {...restProps}>{children}</CreateButton>
}

ChildArticles.EditDeleteButton = ({ children, ...restProps }) => {
    return <EditDeleteButton {...restProps}>{children}</EditDeleteButton>
}

ChildArticles.Table = ({ children, ...restProps }) => {
    return <Table {...restProps}>{children}</Table>
}

ChildArticles.TableRow = ({ children, ...restProps }) => {
    return <TableRow {...restProps}>{children}</TableRow>
}

ChildArticles.TableHeader = ({ children, ...restProps }) => {
    return <TableHeader {...restProps}>{children}</TableHeader>
}

ChildArticles.TableData = ({ children, ...restProps }) => {
    return <TableData {...restProps}>{children}</TableData>
}
