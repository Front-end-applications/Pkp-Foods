import React from "react";

import {
  AdminContainer,
  ProductManagementContainer
} from "../../containers/AdminPortal";

export default function ProductManagement() {
  return (
    <>
      <AdminContainer>
        <ProductManagementContainer />
      </AdminContainer>
    </>
  );
}
