import React from "react";

import { Inception } from "../../components";

export default function QualityStatementsContainer() {
  return (
    <Inception img="/images/home/home_carousel.jpg">
      <Inception.Text>
        <Inception.Title>The Inception...</Inception.Title>
        <Inception.Description>
          The PKP started at RTC X Roads, after a family took a step forward to
          present Traditional Healthy Snacks as best alternative to counter Junk
          Food in the market, as the high consumption of JF is one of the
          reasons for deteriorating Health &amp; increasing lifestyle diseases
          such as diabetes &amp; hypertension.
        </Inception.Description>
        <Inception.Button>About Us</Inception.Button>
      </Inception.Text>
      <div style={{ clear: "both" }}></div>
    </Inception>
  );
}
