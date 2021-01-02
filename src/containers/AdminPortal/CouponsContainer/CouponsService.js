import axios from "axios";

/* Coupon management services */
export const fetchCoupons = (setCoupons) => {
    axios
        .get("http://localhost:8080//getCoupons")
        .then((res) => {
            setCoupons(res.data);
        });
};

export const insertCoupons = (event, state, setState, refCoupon) => {
    event.preventDefault()
    const coupons = [];
    coupons.push(state);
    console.log(coupons)
    axios
        .post("http://localhost:8080//insertCoupons", coupons)
        .then((res) => {

        });

    setState(refCoupon);
    window.location.reload();
};

export const deleteCoupon = (event, couponCode) => {
    event.preventDefault()
    const couponCodes = [];
    couponCodes.push(couponCode);

    axios
        .post("http://localhost:8080//deleteCoupons", couponCodes)
        .then((res) => {

        });

    window.location.reload();
};

/* Event management methods */
export const handleCouponCode = (event, setState) => {
    const value = event.target.value;
    setState(prevState => ({ ...prevState, couponCode: value }));
}

export const handleDescription = (event, setState) => {
    const value = event.target.value;
    setState(prevState => ({ ...prevState, description: value }));
}

export const handleDiscount = (event, setState) => {
    const value = event.target.value;
    setState(prevState => ({ ...prevState, discount: value }));
}

export const handleDiscountType = (event, setState) => {
    const value = event.target.value;
    setState(prevState => ({ ...prevState, discountType: value }));
}

export const handleValidFrom = (event, setState) => {
    const value = event.target.value;
    setState(prevState => ({
        ...prevState,
        validFrom: value,
        validTo: (value > prevState.validTo ? value : prevState.validTo)
    }));
}

export const handleValidTo = (event, setState) => {
    const value = event.target.value;
    setState(prevState => ({ ...prevState, validTo: value }));
}