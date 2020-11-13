import React from "react";

import { Checkout } from "../../components";
import * as ROUTES from "../../constants/routes";

export default function CheckoutContainer() {
  return (
    <Checkout>
      <Checkout.ProgressBar>
        <Checkout.ProgressElement>Shipping</Checkout.ProgressElement>
        <Checkout.ProgressElement>
          Review &amp; Payments
        </Checkout.ProgressElement>
      </Checkout.ProgressBar>

      <Checkout.Title>Delivery Details</Checkout.Title>

      <Checkout.Body>
        <Checkout.DeliveryDetails>
          <Checkout.HorizontalRule />
          <Checkout.Input type="email" label="Email Address" required={true} />

          <Checkout.HorizontalRule />
          <Checkout.Input label="First Name" required={true} />
          <Checkout.Input label="Last Name" required={true} />
          <Checkout.Input label="Street Address" required={true} />
          <Checkout.Input label="City" required={true} />
          <Checkout.Select label="State/Province" required={true}>
            <Checkout.Option>
              Please select a region, state or province
            </Checkout.Option>
            <Checkout.Option>Iceland</Checkout.Option>
            <Checkout.Option>Hungary</Checkout.Option>
          </Checkout.Select>
          <Checkout.Input label="Zip/Postal Code" required={true} />
          <Checkout.Select label="Country" required={true}>
            <Checkout.Option>India</Checkout.Option>
            <Checkout.Option>Iceland</Checkout.Option>
            <Checkout.Option>Hungary</Checkout.Option>
          </Checkout.Select>
          <Checkout.Input label="Phone Number" required={true} />

          <Checkout.Title>Shipping Methods</Checkout.Title>
          <Checkout.HorizontalRule />
          <Checkout.ShippingMethodsTable>
            <Checkout.TableRow>
              <Checkout.TableHeader>Select Method</Checkout.TableHeader>
              <Checkout.TableHeader>Price</Checkout.TableHeader>
              <Checkout.TableHeader>Method Title</Checkout.TableHeader>
              <Checkout.TableHeader>Carrier Title</Checkout.TableHeader>
            </Checkout.TableRow>
            <Checkout.TableRow>
              <Checkout.TableData>
                <Checkout.Radio checked></Checkout.Radio>
              </Checkout.TableData>
              <Checkout.TableData>₹75.00</Checkout.TableData>
              <Checkout.TableData>Delivery Charge</Checkout.TableData>
              <Checkout.TableData>Shipping</Checkout.TableData>
            </Checkout.TableRow>
          </Checkout.ShippingMethodsTable>

          <Checkout.Button background="#a52a3e">
            <Checkout.ReactLink color="#fff" to={ROUTES.PAYMENT}>
              Next
            </Checkout.ReactLink>
          </Checkout.Button>
        </Checkout.DeliveryDetails>

        <Checkout.OrderSummary>
          <Checkout.SummaryTitle>Order Summary</Checkout.SummaryTitle>
          <Checkout.SectionTitle>2 Items in cart</Checkout.SectionTitle>
          <Checkout.HorizontalRule />
          <Checkout.TableRow>
            <Checkout.ItemDetails>
              <Checkout.ItemImage src="/images/products/Sweets.jpg" />
              <div>
                <Checkout.ItemText>Kaju Pak</Checkout.ItemText>
                <Checkout.ItemText>Qty: 2</Checkout.ItemText>
                <Checkout.ItemText>Weight: 500gms</Checkout.ItemText>
              </div>
              <Checkout.ItemText style={{ fontSize: "18px" }}>
                ₹760.00
              </Checkout.ItemText>
            </Checkout.ItemDetails>
          </Checkout.TableRow>
        </Checkout.OrderSummary>
      </Checkout.Body>
    </Checkout>
  );
}
