import React from 'react'
import { Container, Row, Column, Title, Image, Description, OrderedList, UnorderedList } from './styles/qualityStatements'

export default function QualityStatements ({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

QualityStatements.Row = function QualityStatementsRow ({
    children,
    ...restProps
}) {
    return <Row {...restProps}>{children}</Row>
}

QualityStatements.Title = function QualityStatementsTitle ({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

QualityStatements.Column = function QualityStatementsColumn ({
    children,
    ...restProps
}) {
    return <Column {...restProps}>{children}</Column>;
}

QualityStatements.Description = function QualityStatementsDescription ({
    children,
    ...restProps
}) {
    return <Description {...restProps}>{children}</Description>
}

QualityStatements.OrderedList = function QualityStatementsOrderedList ({
    children,
    ...restProps
}) {
    return <OrderedList {...restProps}>{children}</OrderedList>
}

QualityStatements.UnorderedList = function QualityStatementsUnorderedList ({
    children,
    ...restProps
}) {
    return <UnorderedList {...restProps}>{children}</UnorderedList>
}

QualityStatements.Image = function QualityStatementsImage ({ ...restProps }) {
    return <Image {...restProps} />
}
