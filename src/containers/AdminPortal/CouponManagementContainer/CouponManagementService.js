import axios from "axios";

/* Coupon management services */
export const fetchCoupons = (setCoupons) => {
    axios
        .get("http://localhost:8080//getCoupons")
        .then((res) => {
            setCoupons(res.data);
        });
};

export const insertCoupons = (event, coupon, setState, ref) => {
    event.preventDefault()
    const coupons = [];
    coupons.push(coupon);
    axios
        .post("http://localhost:8080//insertCoupons", coupons)
        .then((res) => {

        });

    setState(ref);
    window.location.reload();
};

/* Event management methods */
export const handleCouponCode = (event, state, setState) => {
    setState({ ...state, couponCode: event.target.value });
}

export const handleDescription = (event, state, setState) => {
    setState({ ...state, description: event.target.value });
}

export const handleDiscount = (event, state, setState) => {
    setState({ ...state, discount: event.target.value });
}

export const handleDiscountType = (event, state, setState) => {
    setState({ ...state, discountType: event.target.value });
}

export const handleValidFrom = (event, state, setState) => {
    setState({ ...state, validFrom: event.target.value });
}

export const handleValidTo = (event, state, setState) => {
    setState({ ...state, validTo: event.target.value });
}