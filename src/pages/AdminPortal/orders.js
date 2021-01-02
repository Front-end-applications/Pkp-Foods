import React from "react";

import {
    AdminContainer,
    OrdersContainer
} from "../../containers/AdminPortal";

export default function Orders() {
    return (
        <AdminContainer>
            <OrdersContainer />
        </AdminContainer>
    );
}
