import React from "react";

import { Admin } from "../../../components/adminPortal";
import * as ROUTES from "../../../constants/routes";

export default function AdminContainer({ children }) {
    return (
        <Admin>
            <Admin.Tabs>
                <Admin.Tab>
                    <Admin.TabTitle to={ROUTES.ADMIN_CHILD_ARTICLES}>Child Articles</Admin.TabTitle>
                </Admin.Tab>
                <Admin.Tab>
                    <Admin.TabTitle to={ROUTES.ADMIN_PARENT_ARTICLES}>Parent Articles</Admin.TabTitle>
                </Admin.Tab>
                <Admin.Tab>
                    <Admin.TabTitle to={ROUTES.ADMIN_CATEGORIES}>Categories</Admin.TabTitle>
                </Admin.Tab>
                <Admin.Tab>
                    <Admin.TabTitle to={ROUTES.ADMIN_ORDERS}>Orders</Admin.TabTitle>
                </Admin.Tab>
                <Admin.Tab>
                    <Admin.TabTitle to={ROUTES.ADMIN_COUPONS}>Coupons</Admin.TabTitle>
                </Admin.Tab>
            </Admin.Tabs>
            <Admin.Page>
                {children}
            </Admin.Page>
        </Admin>
    );
}