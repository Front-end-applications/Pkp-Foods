import React from "react";

import { CouponManagement } from "../../../components/adminPortal";

export default function CouponManagementContainer() {
    return (
        <CouponManagement>
            <CouponManagement.Section>
                <CouponManagement.Row>
                    <CouponManagement.Column>
                        <CouponManagement.Text label="Coupon code" />
                    </CouponManagement.Column>
                    <CouponManagement.Column>
                        <CouponManagement.Text label="Code Description" />
                    </CouponManagement.Column>
                </CouponManagement.Row>
                <CouponManagement.Row>
                    <CouponManagement.Column>
                        <CouponManagement.Text label="discount" />
                    </CouponManagement.Column>
                    <CouponManagement.Column>
                        <CouponManagement.Select label="Discount type">

                        </CouponManagement.Select>
                    </CouponManagement.Column>
                    <CouponManagement.Column>
                        <CouponManagement.Date label="Valid from" />
                    </CouponManagement.Column>
                    <CouponManagement.Column>
                        <CouponManagement.Date label="Valid to" />
                    </CouponManagement.Column>
                </CouponManagement.Row>

                <CouponManagement.Row>
                    <CouponManagement.CreateButton>Create</CouponManagement.CreateButton>
                </CouponManagement.Row>
            </CouponManagement.Section>

            <CouponManagement.Row>
                <CouponManagement.Table>
                    <CouponManagement.TableRow>
                        <CouponManagement.TableHeader>S.No</CouponManagement.TableHeader>
                        <CouponManagement.TableHeader>Code</CouponManagement.TableHeader>
                        <CouponManagement.TableHeader>Discount</CouponManagement.TableHeader>
                        <CouponManagement.TableHeader>Discount Type</CouponManagement.TableHeader>
                        <CouponManagement.TableHeader>From</CouponManagement.TableHeader>
                        <CouponManagement.TableHeader>To</CouponManagement.TableHeader>
                        <CouponManagement.TableHeader>Status</CouponManagement.TableHeader>
                        <CouponManagement.TableHeader>Delete</CouponManagement.TableHeader>
                    </CouponManagement.TableRow>
                    <CouponManagement.TableRow>
                        <CouponManagement.TableData></CouponManagement.TableData>
                        <CouponManagement.TableData></CouponManagement.TableData>
                        <CouponManagement.TableData></CouponManagement.TableData>
                        <CouponManagement.TableData></CouponManagement.TableData>
                        <CouponManagement.TableData></CouponManagement.TableData>
                        <CouponManagement.TableData></CouponManagement.TableData>
                        <CouponManagement.TableData></CouponManagement.TableData>
                        <CouponManagement.TableData></CouponManagement.TableData>
                    </CouponManagement.TableRow>
                </CouponManagement.Table>
            </CouponManagement.Row>
        </CouponManagement >
    )
}