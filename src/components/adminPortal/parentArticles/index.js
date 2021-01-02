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
} from "./styles/parentArticles";

export default function ParentArticles({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}

ParentArticles.Row = ({ children, ...restProps }) => {
    return <Row {...restProps}>{children}</Row>
}

ParentArticles.Column = ({ children, ...restProps }) => {
    return <Column {...restProps}>{children}</Column>
}

ParentArticles.Section = ({ children, ...restProps }) => {
    return <Section {...restProps}>{children}</Section>
}

ParentArticles.SectionTitle = ({ children, ...restProps }) => {
    return <SectionTitle {...restProps}>{children}</SectionTitle>
}

ParentArticles.Label = ({ children, ...restProps }) => {
    return <Label {...restProps}>{children}</Label>
}

ParentArticles.Text = ({ ...restProps }) => {
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

ParentArticles.Date = ({ ...restProps }) => {
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

ParentArticles.Select = ({ children, ...restProps }) => {
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

ParentArticles.Option = ({ children, ...restProps }) => {
    return <Option {...restProps}>{children}</Option>
}

ParentArticles.CreateButton = ({ children, ...restProps }) => {
    return <CreateButton {...restProps}>{children}</CreateButton>
}

ParentArticles.EditDeleteButton = ({ children, ...restProps }) => {
    return <EditDeleteButton {...restProps}>{children}</EditDeleteButton>
}

ParentArticles.Table = ({ children, ...restProps }) => {
    return <Table {...restProps}>{children}</Table>
}

ParentArticles.TableRow = ({ children, ...restProps }) => {
    return <TableRow {...restProps}>{children}</TableRow>
}

ParentArticles.TableHeader = ({ children, ...restProps }) => {
    return <TableHeader {...restProps}>{children}</TableHeader>
}

ParentArticles.TableData = ({ children, ...restProps }) => {
    return <TableData {...restProps}>{children}</TableData>
}
