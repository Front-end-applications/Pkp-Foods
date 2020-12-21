import React from "react";

import { OrderManagement } from "../../../components/adminPortal";

export default function OrderManagementContainer() {
    return (
        <OrderManagement>
            <OrderManagement.Row>
                <OrderManagement.Table>
                    <OrderManagement.TableRow>
                        <OrderManagement.TableHeader></OrderManagement.TableHeader>
                        <OrderManagement.TableHeader>Order No.</OrderManagement.TableHeader>
                        <OrderManagement.TableHeader>Date</OrderManagement.TableHeader>
                        <OrderManagement.TableHeader>Time</OrderManagement.TableHeader>
                        <OrderManagement.TableHeader>Country</OrderManagement.TableHeader>
                        <OrderManagement.TableHeader>State</OrderManagement.TableHeader>
                        <OrderManagement.TableHeader>Payment</OrderManagement.TableHeader>
                        <OrderManagement.TableHeader>Shipping</OrderManagement.TableHeader>
                        <OrderManagement.TableHeader>Total Value</OrderManagement.TableHeader>
                        <OrderManagement.TableHeader>Delete</OrderManagement.TableHeader>
                    </OrderManagement.TableRow>
                    <OrderManagement.TableRow>
                        <OrderManagement.TableData></OrderManagement.TableData>
                        <OrderManagement.TableData></OrderManagement.TableData>
                        <OrderManagement.TableData></OrderManagement.TableData>
                        <OrderManagement.TableData></OrderManagement.TableData>
                        <OrderManagement.TableData></OrderManagement.TableData>
                        <OrderManagement.TableData></OrderManagement.TableData>
                        <OrderManagement.TableData></OrderManagement.TableData>
                        <OrderManagement.TableData></OrderManagement.TableData>
                        <OrderManagement.TableData></OrderManagement.TableData>
                        <OrderManagement.TableData></OrderManagement.TableData>
                    </OrderManagement.TableRow>
                </OrderManagement.Table>
            </OrderManagement.Row>
        </OrderManagement>
    )
}