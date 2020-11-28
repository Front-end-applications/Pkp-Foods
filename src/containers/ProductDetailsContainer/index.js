import React, { useContext } from "react";

import * as ROUTES from "../../constants/routes";
import { ProductDetails } from "../../components";
import { CartContext } from "../../context/shoppingCart";
import * as SERVICES from "./ProductDetailsService";

export default function ProductDetailContainer({ ...restProps }) {
  const [cart, setCart] = useContext(CartContext);

  restProps.state.quantity = 1;

  console.log(restProps.state);

  return (
    <ProductDetails>
      <ProductDetails.Image src="/images/products/Sweets.jpg" />
      <ProductDetails.Details>
        <ProductDetails.Title>
          {restProps.state.productName}
        </ProductDetails.Title>
        <ProductDetails.Price>
          {"₹"}
          {/* {restProps.state.cost_per_kg} */}
          {
            // / (1000 / product.weights[0])} {"/ "}
            // {product.weights[0]} {"gms"}
          }
        </ProductDetails.Price>
        <ProductDetails.Expiry>
          Fresh For:{" "}
          {restProps.state.expiry +
            " " +
            (restProps.state.expiry > 1 ? "days" : "day")}
        </ProductDetails.Expiry>

        <ProductDetails.Availablity>
          <span>Product</span> In stock
        </ProductDetails.Availablity>

        <ProductDetails.HorizontalRule />

        <ProductDetails.WeightsGroup>
          Weights
          {restProps.state.childArticlesList.map((childArticle, index) => (
            <ProductDetails.Weights
              key={index}
              name="weight"
              value={
                childArticle.weight.weight +
                " " +
                childArticle.weight.unitOfMeasurement
              }
            />
          ))}
        </ProductDetails.WeightsGroup>

        <ProductDetails.HorizontalRule />

        <ProductDetails.QuantityGroup>
          <p>Quantity</p>
          <div>
            <ProductDetails.QtyBtn>-</ProductDetails.QtyBtn>
            <ProductDetails.Quantity
              onChange={(event) => SERVICES.handleQuantity(restProps)}
              value={restProps.state.quantity}
            />
            <ProductDetails.QtyBtn>+</ProductDetails.QtyBtn>
          </div>
        </ProductDetails.QuantityGroup>

        <ProductDetails.HorizontalRule />

        {restProps.state.desc && (
          <>
            <ProductDetails.Desc>{restProps.state.desc}</ProductDetails.Desc>
            <ProductDetails.HorizontalRule />
          </>
        )}

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

        <ProductDetails.Button
          onClick={(_event) => SERVICES.handleCart(setCart, restProps)}
          background="#a72c41"
        >
          Add to cart
        </ProductDetails.Button>
        <ProductDetails.Button background="#08174c">
          <ProductDetails.ReactLink
            onClick={(event) => SERVICES.handleCart(setCart, restProps)}
            to={ROUTES.SHOPPING_CART}
          >
            Buy now
          </ProductDetails.ReactLink>
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

/*<div style={{ position: "absolute", width: "30%", height: "75%", overflow: "hidden" }}>
          <ProductDetails.Image
            src={restProps.state.image}
            style={{ margin: "0px", width: "400%" }}
          />
        </div> */
