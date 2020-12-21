import React from "react";

import { Admin } from "../../../components/adminPortal";
import * as ROUTES from "../../../constants/routes";

export default function AdminContainer({ children }) {
    return (
        <Admin>
            <Admin.Tabs>
                <Admin.Tab>
                    <Admin.TabTitle to={ROUTES.ADMIN_PRODUCT_MANAGEMENT}>Product management</Admin.TabTitle>
                </Admin.Tab>
                <Admin.Tab>
                    <Admin.TabTitle to={ROUTES.ADMIN_ORDER_MANAGEMENT}>Order management</Admin.TabTitle>
                </Admin.Tab>
                <Admin.Tab>
                    <Admin.TabTitle to={ROUTES.ADMIN_COUPON_MANAGEMENT}>Coupon management</Admin.TabTitle>
                </Admin.Tab>
            </Admin.Tabs>
            <Admin.Page>
                {children}
            </Admin.Page>
        </Admin>
    );
}