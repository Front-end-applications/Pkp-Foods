import React from "react";

import {
    Container,
    Inner,
    Row,
    Table,
    TableRow,
    TableHeader,
    TableData,
} from "./styles/orders";

export default function Orders({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}

Orders.Row = ({ children, ...restProps }) => {
    return <Row {...restProps}>{children}</Row>
}

Orders.Table = ({ children, ...restProps }) => {
    return <Table {...restProps}>{children}</Table>
}

Orders.TableRow = ({ children, ...restProps }) => {
    return <TableRow {...restProps}>{children}</TableRow>
}

Orders.TableHeader = ({ children, ...restProps }) => {
    return <TableHeader {...restProps}>{children}</TableHeader>
}

Orders.TableData = ({ children, ...restProps }) => {
    return <TableData {...restProps}>{children}</TableData>
}