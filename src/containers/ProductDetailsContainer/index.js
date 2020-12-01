import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import * as ROUTES from "../../constants/routes";
import { ProductDetails } from "../../components";
import { CartContext } from "../../context/shoppingCart";
import * as SERVICES from "./ProductDetailsService";

export default function ProductDetailContainer() {
  const [cart, setCart] = useContext(CartContext);
  const [state, setState] = useState(useLocation().state);

  useEffect(() => {
    setState({ ...state, quantity: 1, pincode: "" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(state);

  function handleChange(event, setState) {
    console.log(event.target);
    setState({ ...state, pincode: event.target.value });
  }

  return (
    <ProductDetails>
      <ProductDetails.Image
        src={"/images/products/" + state.familyName + "/" + state.productImage}
      />
      <ProductDetails.Details>
        <ProductDetails.Title>{state.productName}</ProductDetails.Title>
        <ProductDetails.Price>
          {"₹"}
          {/* {restProps.state.cost_per_kg} */}
          {
            // / (1000 / product.weights[0])} {"/ "}
            // {product.weights[0]} {"gms"}
          }
        </ProductDetails.Price>
        <ProductDetails.Expiry>
          Fresh For: {state.expiry + " " + (state.expiry > 1 ? "days" : "day")}
        </ProductDetails.Expiry>

        <ProductDetails.Availablity>
          <span>Product</span> In stock
        </ProductDetails.Availablity>

        <ProductDetails.HorizontalRule />

        <ProductDetails.WeightsGroup>
          Weights
          {state.childArticlesList.map((childArticle, index) => (
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
            <ProductDetails.QtyBtn
              onClick={(event) =>
                SERVICES.handleQuantity(event, state, setState)
              }
              value="-"
            >
              -
            </ProductDetails.QtyBtn>
            <ProductDetails.Quantity
              value={state.quantity}
              onChange={(event) =>
                SERVICES.handleQuantity(event, state, setState)
              }
              onBlur={(event) =>
                SERVICES.handleBlurQuantity(event, state, setState)
              }
            />
            <ProductDetails.QtyBtn
              onClick={(event) =>
                SERVICES.handleQuantity(event, state, setState)
              }
              value="+"
            >
              +
            </ProductDetails.QtyBtn>
          </div>
        </ProductDetails.QuantityGroup>

        <ProductDetails.HorizontalRule />

        {state.desc && (
          <>
            <ProductDetails.Desc>{state.desc}</ProductDetails.Desc>
            <ProductDetails.HorizontalRule />
          </>
        )}

        <ProductDetails.Desc>
          Pick Up features is available at Hyderabad Stores. <br />
          Please check the Pick Up stores at the checkout page.
        </ProductDetails.Desc>

        <ProductDetails.HorizontalRule />

        <ProductDetails.PinCode>
          <ProductDetails.Input
            placeholder="Enter Pincode"
            value={state.pincode}
            onChange={(event) => handleChange(event, setState)}
          />
          <ProductDetails.PinCodeButton style={{ background: "#5a5a5a" }}>
            Check
          </ProductDetails.PinCodeButton>
        </ProductDetails.PinCode>

        <ProductDetails.HorizontalRule />

        <ProductDetails.Button
          onClick={(_event) => SERVICES.handleCart(setCart, state)}
          background="#a72c41"
        >
          Add to cart
        </ProductDetails.Button>
        <ProductDetails.Button background="#08174c">
          <ProductDetails.ReactLink
            onClick={(event) => SERVICES.handleCart(setCart, state)}
            to={ROUTES.SHOPPING_CART}
          >
            Buy now
          </ProductDetails.ReactLink>
        </ProductDetails.Button>
      </ProductDetails.Details>
    </ProductDetails>
  );
}
