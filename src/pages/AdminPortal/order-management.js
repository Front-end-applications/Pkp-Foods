import React from "react";

import {
    AdminContainer,
    OrderManagementContainer
} from "../../containers/AdminPortal";

export default function OrderManagement() {
    return (
        <AdminContainer>
            <OrderManagementContainer />
        </AdminContainer>
    );
}
