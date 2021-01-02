import React from "react";

import { Orders } from "../../../components/adminPortal";

export default function OrderManagementContainer() {
    return (
        <Orders>
            <Orders.Row>
                <Orders.Table>
                    <Orders.TableRow>
                        <Orders.TableHeader></Orders.TableHeader>
                        <Orders.TableHeader>Order No.</Orders.TableHeader>
                        <Orders.TableHeader>Date</Orders.TableHeader>
                        <Orders.TableHeader>Time</Orders.TableHeader>
                        <Orders.TableHeader>Country</Orders.TableHeader>
                        <Orders.TableHeader>State</Orders.TableHeader>
                        <Orders.TableHeader>Payment</Orders.TableHeader>
                        <Orders.TableHeader>Shipping</Orders.TableHeader>
                        <Orders.TableHeader>Total Value</Orders.TableHeader>
                        <Orders.TableHeader>Delete</Orders.TableHeader>
                    </Orders.TableRow>
                    <Orders.TableRow>
                        <Orders.TableData></Orders.TableData>
                        <Orders.TableData></Orders.TableData>
                        <Orders.TableData></Orders.TableData>
                        <Orders.TableData></Orders.TableData>
                        <Orders.TableData></Orders.TableData>
                        <Orders.TableData></Orders.TableData>
                        <Orders.TableData></Orders.TableData>
                        <Orders.TableData></Orders.TableData>
                        <Orders.TableData></Orders.TableData>
                        <Orders.TableData></Orders.TableData>
                    </Orders.TableRow>
                </Orders.Table>
            </Orders.Row>
        </Orders>
    )
}