import React from "react";
import { ProductDetails } from "../components";

export default function ProductDetailContainer({ ...restProps }) {
  console.log(restProps);
  return (
    <ProductDetails>
      <ProductDetails.Image src={restProps.state.image} />
      <ProductDetails.Details>
        <ProductDetails.Title>{restProps.state.title}</ProductDetails.Title>
        <ProductDetails.Price>
          {"₹"}
          {restProps.state.cost_per_kg}
          {
            // / (1000 / product.weights[0])} {"/ "}
            // {product.weights[0]} {"gms"}
          }
        </ProductDetails.Price>
        <ProductDetails.Expiry>
          Fresh For: {restProps.expiry}
        </ProductDetails.Expiry>

        <ProductDetails.Availablity>
          <span>Product</span> In stock
        </ProductDetails.Availablity>

        <ProductDetails.HorizontalRule />

        <ProductDetails.WeightsGroup>
          Weights
          {restProps.state.weights.map((weight, index) => (
            <ProductDetails.Weights key={index} name="weight" value={weight} />
          ))}
        </ProductDetails.WeightsGroup>

        <ProductDetails.HorizontalRule />

        <div>
          Quantity
          <ProductDetails.Quantity min={1} />
        </div>

        <ProductDetails.HorizontalRule />

        <ProductDetails.Desc>
          {restProps.state.desc && (
            <>
              {restProps.state.desc}
              <ProductDetails.HorizontalRule />
            </>
          )}
        </ProductDetails.Desc>

        <ProductDetails.Desc>
          Pick Up features is available at Hyderabad Stores. <br />
          Please check the Pick Up stores at the checkout page.
        </ProductDetails.Desc>

        <ProductDetails.HorizontalRule />

        <ProductDetails.PinCode>
          <ProductDetails.Input placeholder="Enter Pincode" />
          <ProductDetails.PinCodeButton style={{ background: "#5a5a5a" }}>
            Check
          </ProductDetails.PinCodeButton>
        </ProductDetails.PinCode>

        <ProductDetails.HorizontalRule />

        <ProductDetails.Button background="#a72c41">
          Add to cart
        </ProductDetails.Button>
        <ProductDetails.Button background="#08174c">
          Buy now
        </ProductDetails.Button>
      </ProductDetails.Details>
    </ProductDetails>
  );
}

// ​​
// category: "Traditional South Indian"
// ​​
// cost_per_kg: 1520
// ​​
// expiry: 3
// ​​
// gluten_free: true
// ​​
// image: "/images/products/Sweets.jpg"
// ​​
// title: "kaju Pak"
// ​​
// vegan: true
// ​​
// weights: (3) […]
// ​​​
// 0: 250
// ​​​
// 1: 500
// ​​​
// 2: 1000
// ​​​
// length: 3
