import React, { useContext } from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

import { ShoppingCart } from "../../components";
import { CartContext } from "../../context/shoppingCart";
import * as ROUTES from "../../constants/routes";
import * as SERVICES from "./ShoppingCartContainerService";

export default function ShoppingCartContainer() {
  const [cart, setCart] = useContext(CartContext);

  return (
    <ShoppingCart>
      <ShoppingCart.Title>Shopping Cart</ShoppingCart.Title>
      <ShoppingCart.BillingSummary>
        <ShoppingCart.CartTable>
          <ShoppingCart.TableRow>
            <ShoppingCart.TableHeader>Item</ShoppingCart.TableHeader>
            <ShoppingCart.TableHeader>Price</ShoppingCart.TableHeader>
            <ShoppingCart.TableHeader>Quantity</ShoppingCart.TableHeader>
            <ShoppingCart.TableHeader>Total</ShoppingCart.TableHeader>
          </ShoppingCart.TableRow>

          {cart.map((product, index) => (
            <ShoppingCart.TableRow key={index}>
              <ShoppingCart.TableData>
                <ShoppingCart.ItemImage src={product.image} />
                <ShoppingCart.ItemDetails>
                  <ShoppingCart.ItemTitle to={""}>
                    {product.title}
                  </ShoppingCart.ItemTitle>
                  <ShoppingCart.ItemWeight>
                    Weight: {product.weights[0]} gms
                  </ShoppingCart.ItemWeight>
                  <div>
                    <ShoppingCart.ItemButton>
                      <FaPencilAlt />
                    </ShoppingCart.ItemButton>
                    <ShoppingCart.ItemButton
                      onClick={(event) => SERVICES.handleDelete(index, setCart)}
                    >
                      <FaTrash />
                    </ShoppingCart.ItemButton>
                  </div>
                </ShoppingCart.ItemDetails>
              </ShoppingCart.TableData>
              <ShoppingCart.TableData>
                ₹{(product.cost_per_kg * product.weights[0]) / 1000}
              </ShoppingCart.TableData>
              <ShoppingCart.TableData>
                <ShoppingCart.QtyBtn>-</ShoppingCart.QtyBtn>
                <ShoppingCart.Quantity></ShoppingCart.Quantity>
                <ShoppingCart.QtyBtn>+</ShoppingCart.QtyBtn>
              </ShoppingCart.TableData>
              <ShoppingCart.TableData style={{ fontWeight: "bold" }}>
                ₹{(product.cost_per_kg * product.weights[0]) / 1000}
              </ShoppingCart.TableData>
            </ShoppingCart.TableRow>
          ))}

          <ShoppingCart.ButtonsRow>
            <ShoppingCart.Button>
              <ShoppingCart.ReactLink
                color="#555555"
                to={ROUTES.COLLECTION_CATEGORY}
              >
                Continue Shopping
              </ShoppingCart.ReactLink>
            </ShoppingCart.Button>

            <ShoppingCart.Button background="#a52a3e">
              <ShoppingCart.ReactLink color="#ffffff" to={ROUTES.CHECKOUT}>
                Proceed to checkout
              </ShoppingCart.ReactLink>
            </ShoppingCart.Button>
          </ShoppingCart.ButtonsRow>
        </ShoppingCart.CartTable>

        <ShoppingCart.Summary>
          <ShoppingCart.SummaryTitle>Summary</ShoppingCart.SummaryTitle>
          <ShoppingCart.HorizontalRule />

          <ShoppingCart.SummarySection>
            <ShoppingCart.SectionTitle>
              Estimate Shipping and Tax
            </ShoppingCart.SectionTitle>
            <ShoppingCart.HorizontalRule />
          </ShoppingCart.SummarySection>
          <ShoppingCart.SummarySection>
            <ShoppingCart.SectionBody>
              <ShoppingCart.SectionLabel>
                Subtotal (Excl. Tax)
              </ShoppingCart.SectionLabel>
              <ShoppingCart.SectionValue>₹361.90</ShoppingCart.SectionValue>
            </ShoppingCart.SectionBody>

            <ShoppingCart.SectionBody>
              <ShoppingCart.SectionLabel>
                Subtotal (Incl. Tax)
              </ShoppingCart.SectionLabel>
              <ShoppingCart.SectionValue>₹380.00</ShoppingCart.SectionValue>
            </ShoppingCart.SectionBody>

            <ShoppingCart.SectionBody>
              <ShoppingCart.SectionLabel>
                Shipping (Shipping - Delivery Charge)
              </ShoppingCart.SectionLabel>
              <ShoppingCart.SectionValue>₹70.35</ShoppingCart.SectionValue>
            </ShoppingCart.SectionBody>

            <ShoppingCart.SectionBody>
              <ShoppingCart.SectionLabel>
                Store Credit Discount
              </ShoppingCart.SectionLabel>
              <ShoppingCart.SectionValue>₹0.00</ShoppingCart.SectionValue>
            </ShoppingCart.SectionBody>
            <ShoppingCart.HorizontalRule />
          </ShoppingCart.SummarySection>

          <ShoppingCart.SummarySection>
            <ShoppingCart.SectionBody>
              <ShoppingCart.SectionLabel>
                <ShoppingCart.SectionTotal>
                  Order Total Incl. Tax
                </ShoppingCart.SectionTotal>
              </ShoppingCart.SectionLabel>
              <ShoppingCart.SectionValue>
                <ShoppingCart.SectionTotal>₹450.35</ShoppingCart.SectionTotal>
              </ShoppingCart.SectionValue>
            </ShoppingCart.SectionBody>
            <ShoppingCart.HorizontalRule />
          </ShoppingCart.SummarySection>

          <ShoppingCart.SummarySection>
            <ShoppingCart.SectionBody>
              <ShoppingCart.SectionLabel>
                <ShoppingCart.SectionTotal>
                  Order Total Excl. Tax
                </ShoppingCart.SectionTotal>
              </ShoppingCart.SectionLabel>
              <ShoppingCart.SectionValue>
                <ShoppingCart.SectionTotal>₹432.25</ShoppingCart.SectionTotal>
              </ShoppingCart.SectionValue>
            </ShoppingCart.SectionBody>
          </ShoppingCart.SummarySection>
        </ShoppingCart.Summary>
      </ShoppingCart.BillingSummary>

      <ShoppingCart.GiftMessage></ShoppingCart.GiftMessage>

      {/* <ShoppingCart.Suggestions>Suggestions</ShoppingCart.Suggestions> */}
    </ShoppingCart>
  );
}
