import React from "react";

import { Payment } from "../components";

import * as ROUTES from "../constants/routes";

export default function PaymentContainer() {
  return (
    <Payment>
      <Payment.ProgressBar>
        <Payment.ProgressElement>Shipping</Payment.ProgressElement>
        <Payment.ProgressElement>Review &amp; Payments</Payment.ProgressElement>
      </Payment.ProgressBar>

      <Payment.Title>Payment Method</Payment.Title>

      <Payment.Body>
        <Payment.DeliveryDetails>
          <Payment.HorizontalRule />
          <Payment.Button background="#a52a3e">
            <Payment.ReactLink color="#fff" to={ROUTES.PAYMENT}>
              Next
            </Payment.ReactLink>
          </Payment.Button>
        </Payment.DeliveryDetails>

        <Payment.OrderSummary>
          <Payment.SummaryTitle>Order Summary</Payment.SummaryTitle>
          <Payment.SectionTitle>2 Items in cart</Payment.SectionTitle>
          <Payment.HorizontalRule />
          <Payment.TableRow>
            <Payment.ItemDetails>
              <Payment.ItemImage src="/images/products/Sweets.jpg" />
              <div>
                <Payment.ItemText>Kaju Pak</Payment.ItemText>
                <Payment.ItemText>Qty: 2</Payment.ItemText>
                <Payment.ItemText>Weight: 500gms</Payment.ItemText>
              </div>
              <Payment.ItemText style={{ fontSize: "18px" }}>
                ₹760.00
              </Payment.ItemText>
            </Payment.ItemDetails>
          </Payment.TableRow>
        </Payment.OrderSummary>
      </Payment.Body>
    </Payment>
  );
}
