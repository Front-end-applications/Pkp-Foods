import React, { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa"

import { CouponManagement } from "../../../components/adminPortal";
import * as SERVICES from "./CouponManagementService";

export default function CouponManagementContainer() {

    const today = new Date();
    var formattedDate = today.getFullYear() + "-" +
        (today.getMonth().length < 2 ? "0" + (today.getMonth() + 1) : today.getMonth() + 1) + "-" +
        (today.getDate().length < 2 ? "0" + today.getDate() : today.getDate());

    const coupon = {
        "couponCode": "",
        "description": "",
        "discount": 0,
        "discountType": "Percentage",
        "validFrom": formattedDate,
        "validTo": formattedDate
    }

    const [state, setState] = useState(coupon);
    const [coupons, setCoupons] = useState([]);

    useEffect(() => {
        SERVICES.fetchCoupons(setCoupons);
    }, []);

    return (
        <CouponManagement>
            <CouponManagement.Section>
                <CouponManagement.Row>
                    <CouponManagement.Column>
                        <CouponManagement.Text
                            label="Coupon code"
                            value={state.couponCode}
                            onChange={(event) => SERVICES.handleCouponCode(event, state, setState)}
                        />
                    </CouponManagement.Column>
                    <CouponManagement.Column>
                        <CouponManagement.Text
                            label="Code Description"
                            value={state.description}
                            onChange={(event) => SERVICES.handleDescription(event, state, setState)}
                        />
                    </CouponManagement.Column>
                </CouponManagement.Row>
                <CouponManagement.Row>
                    <CouponManagement.Column>
                        <CouponManagement.Text
                            label="discount"
                            value={state.discount}
                            onChange={(event) => SERVICES.handleDiscount(event, state, setState)}
                        />
                    </CouponManagement.Column>
                    <CouponManagement.Column>
                        <CouponManagement.Select
                            label="Discount type"
                            value={state.discountType}
                            onChange={(event) => SERVICES.handleDiscountType(event, state, setState)}
                        >
                            <CouponManagement.Option>Fixed</CouponManagement.Option>
                            <CouponManagement.Option>Percentage</CouponManagement.Option>
                        </CouponManagement.Select>
                    </CouponManagement.Column>
                    <CouponManagement.Column>
                        <CouponManagement.Date
                            label="Valid from"
                            min={formattedDate}
                            value={state.validFrom}
                            onChange={(event) => SERVICES.handleValidFrom(event, state, setState)}
                        />
                    </CouponManagement.Column>
                    <CouponManagement.Column>
                        <CouponManagement.Date
                            label="Valid to"
                            min={state.validFrom}
                            value={state.validTo}
                            onChange={(event) => SERVICES.handleValidTo(event, state, setState)}
                        />
                    </CouponManagement.Column>
                </CouponManagement.Row>

                <CouponManagement.Row>
                    <CouponManagement.CreateButton
                        onClick={(event) => SERVICES.insertCoupons(event, state, setState, coupon)}
                    >Create</CouponManagement.CreateButton>
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
                    {coupons.length !== 0 && coupons.map((coupon, index) => (
                        <CouponManagement.TableRow key={index}>
                            <CouponManagement.TableData>{index + 1}</CouponManagement.TableData>
                            <CouponManagement.TableData>{coupon.couponCode}</CouponManagement.TableData>
                            <CouponManagement.TableData>{coupon.description}</CouponManagement.TableData>
                            <CouponManagement.TableData>{coupon.discount}</CouponManagement.TableData>
                            <CouponManagement.TableData>{coupon.discountType}</CouponManagement.TableData>
                            <CouponManagement.TableData>{coupon.validFrom}</CouponManagement.TableData>
                            <CouponManagement.TableData>{coupon.validTo}</CouponManagement.TableData>
                            <CouponManagement.TableData>
                                <CouponManagement.DeleteButton
                                    onClick={(event) => SERVICES.deleteCoupon(event, coupon.couponCode)}
                                ><FaTrash /></CouponManagement.DeleteButton>
                            </CouponManagement.TableData>
                        </CouponManagement.TableRow>
                    ))}

                </CouponManagement.Table>
            </CouponManagement.Row>
        </CouponManagement >
    )
}