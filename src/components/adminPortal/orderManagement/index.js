import React from "react";

import {
    Container,
    Inner,
    Row,
    Table,
    TableRow,
    TableHeader,
    TableData,
} from "./styles/orderManagement";

export default function OrderManagement({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}

OrderManagement.Row = ({ children, ...restProps }) => {
    return <Row {...restProps}>{children}</Row>
}

OrderManagement.Table = ({ children, ...restProps }) => {
    return <Table {...restProps}>{children}</Table>
}

OrderManagement.TableRow = ({ children, ...restProps }) => {
    return <TableRow {...restProps}>{children}</TableRow>
}

OrderManagement.TableHeader = ({ children, ...restProps }) => {
    return <TableHeader {...restProps}>{children}</TableHeader>
}

OrderManagement.TableData = ({ children, ...restProps }) => {
    return <TableData {...restProps}>{children}</TableData>
}