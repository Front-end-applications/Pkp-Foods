import React from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

import { ShoppingCart } from "../components";

import * as ROUTES from "../constants/routes";

export default function ShoppingCartContainer() {
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

          <ShoppingCart.TableRow>
            <ShoppingCart.TableData>
              <ShoppingCart.ItemImage src="/images/products/Sweets.jpg" />
              <ShoppingCart.ItemDetails>
                <ShoppingCart.ItemTitle>Kaju Pak</ShoppingCart.ItemTitle>
                <ShoppingCart.ItemWeight>
                  Weight: 250 gms{" "}
                </ShoppingCart.ItemWeight>
                <div>
                  <ShoppingCart.ItemButton>
                    <FaPencilAlt />
                  </ShoppingCart.ItemButton>
                  <ShoppingCart.ItemButton>
                    <FaTrash />
                  </ShoppingCart.ItemButton>
                </div>
              </ShoppingCart.ItemDetails>
            </ShoppingCart.TableData>
            <ShoppingCart.TableData>₹380.00</ShoppingCart.TableData>
            <ShoppingCart.TableData>
              <ShoppingCart.QtyBtn>-</ShoppingCart.QtyBtn>
              <ShoppingCart.Quantity></ShoppingCart.Quantity>
              <ShoppingCart.QtyBtn>+</ShoppingCart.QtyBtn>
            </ShoppingCart.TableData>
            <ShoppingCart.TableData style={{ fontWeight: "bold" }}>
              ₹760.00
            </ShoppingCart.TableData>
          </ShoppingCart.TableRow>

          <ShoppingCart.ButtonsRow>
            <ShoppingCart.Button>Continue Shopping</ShoppingCart.Button>
            <ShoppingCart.Button background="#a52a3e">
              <ShoppingCart.ReactLink to={ROUTES.CHECKOUT}>
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
