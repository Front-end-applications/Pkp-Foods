import React, { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa"

import { Coupons } from "../../../components/adminPortal";
import * as SERVICES from "./CouponsService";

export default function CouponsContainer() {

    const today = new Date();
    var formattedDate = today.getFullYear() + "-" +
        (today.getMonth() < 10 ? "0" + (today.getMonth() + 1) : today.getMonth() + 1) + "-" +
        (today.getDate() < 10 ? "0" + today.getDate() : today.getDate());

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
        <Coupons>
            <Coupons.Section>
                <Coupons.Row>
                    <Coupons.Column>
                        <Coupons.Text
                            label="Coupon code"
                            value={state.couponCode}
                            onChange={(event) => SERVICES.handleCouponCode(event, setState)}
                        />
                    </Coupons.Column>
                    <Coupons.Column>
                        <Coupons.Text
                            label="Code Description"
                            value={state.description}
                            onChange={(event) => SERVICES.handleDescription(event, setState)}
                        />
                    </Coupons.Column>
                </Coupons.Row>
                <Coupons.Row>
                    <Coupons.Column>
                        <Coupons.Text
                            label="discount"
                            value={state.discount}
                            onChange={(event) => SERVICES.handleDiscount(event, setState)}
                        />
                    </Coupons.Column>
                    <Coupons.Column>
                        <Coupons.Select
                            label="Discount type"
                            value={state.discountType}
                            onChange={(event) => SERVICES.handleDiscountType(event, setState)}
                        >
                            <Coupons.Option>Fixed</Coupons.Option>
                            <Coupons.Option>Percentage</Coupons.Option>
                        </Coupons.Select>
                    </Coupons.Column>
                    <Coupons.Column>
                        <Coupons.Date
                            label="Valid from"
                            min={formattedDate}
                            value={state.validFrom}
                            onChange={(event) => SERVICES.handleValidFrom(event, setState)}
                        />
                    </Coupons.Column>
                    <Coupons.Column>
                        <Coupons.Date
                            label="Valid to"
                            min={state.validFrom}
                            value={state.validTo}
                            onChange={(event) => SERVICES.handleValidTo(event, setState)}
                        />
                    </Coupons.Column>
                </Coupons.Row>

                <Coupons.Row>
                    <Coupons.CreateButton
                        onClick={(event) => SERVICES.insertCoupons(event, state, setState, coupon)}
                    >Create</Coupons.CreateButton>
                </Coupons.Row>
            </Coupons.Section>

            <Coupons.Row>
                <Coupons.Table>
                    <Coupons.TableRow>
                        <Coupons.TableHeader>S.No</Coupons.TableHeader>
                        <Coupons.TableHeader>Code</Coupons.TableHeader>
                        <Coupons.TableHeader>Discount</Coupons.TableHeader>
                        <Coupons.TableHeader>Discount Type</Coupons.TableHeader>
                        <Coupons.TableHeader>From</Coupons.TableHeader>
                        <Coupons.TableHeader>To</Coupons.TableHeader>
                        <Coupons.TableHeader>Status</Coupons.TableHeader>
                        <Coupons.TableHeader>Delete</Coupons.TableHeader>
                    </Coupons.TableRow>
                    {coupons.length !== 0 && coupons.map((coupon, index) => (
                        <Coupons.TableRow key={index}>
                            <Coupons.TableData>{index + 1}</Coupons.TableData>
                            <Coupons.TableData>{coupon.couponCode}</Coupons.TableData>
                            <Coupons.TableData>{coupon.description}</Coupons.TableData>
                            <Coupons.TableData>{coupon.discount}</Coupons.TableData>
                            <Coupons.TableData>{coupon.discountType}</Coupons.TableData>
                            <Coupons.TableData>{coupon.validFrom}</Coupons.TableData>
                            <Coupons.TableData>{coupon.validTo}</Coupons.TableData>
                            <Coupons.TableData>
                                <Coupons.DeleteButton
                                    onClick={(event) => SERVICES.deleteCoupon(event, coupon.couponCode)}
                                ><FaTrash /></Coupons.DeleteButton>
                            </Coupons.TableData>
                        </Coupons.TableRow>
                    ))}

                </Coupons.Table>
            </Coupons.Row>
        </Coupons >
    )
}