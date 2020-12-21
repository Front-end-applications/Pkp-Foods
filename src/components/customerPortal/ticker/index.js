import React from 'react'

import { Container, Inner, Message } from "./styles/ticker";

export default function Ticker({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}

Ticker.Message = function TickerMessage({ children, ...restProps }) {
    return <Message {...restProps}>{children}</Message>
}