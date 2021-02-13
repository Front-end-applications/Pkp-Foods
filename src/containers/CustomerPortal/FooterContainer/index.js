import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaCcVisa,
  FaCcAmazonPay,
  FaCcApplePay,
  FaCcAmex,
  FaCcDinersClub,
  FaCcDiscover,
  FaCcJcb,
  FaCcMastercard,
  FaCcPaypal,
  FaCcStripe,
} from "react-icons/fa";

import { Footer } from "../../../components/customerPortal";

export default function FooterContainer() {
  return (
    <Footer>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Title>Company name</Footer.Title>
          <Footer.Link href="#">About us</Footer.Link>
          <Footer.Link href="#">FAQs</Footer.Link>
          <Footer.Link href="#">Our stores</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Title>Our policies</Footer.Title>
          <Footer.Link href="#">Terms and Conditions</Footer.Link>
          <Footer.Link href="#">Privacy policy</Footer.Link>
          <Footer.Link href="#">Refund policy</Footer.Link>
          <Footer.Link href="#">Shipping policy</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Title>Get in Touch</Footer.Title>
          <Footer.Link href="mailto:example@domain.com">
            Email: example@domain.com
          </Footer.Link>
          <Footer.Link href="tel: 040-1234 5678">
            Contact: 040-1234 5678
          </Footer.Link>

          <Footer.Title>News Letter</Footer.Title>
          <Footer.Text>
            Double bonanza! Get offer coupons and new recipe details in just one
            click!
          </Footer.Text>
          <Footer.Subscribe />
          <Footer.SubscribeButton>Subscribe</Footer.SubscribeButton>
        </Footer.Column>
        <Footer.Column>
          <Footer.Title>Connect with us</Footer.Title>
          <div>
            <Footer.SocialLinks
              href="https://www.instagram.com/pkpfoods/"
              target="_blank"
            >
              <FaInstagram />
            </Footer.SocialLinks>
            <Footer.SocialLinks
              href="https://www.facebook.com/pkpfoods/"
              target="_blank"
            >
              <FaFacebook />
            </Footer.SocialLinks>
          </div>

          <Footer.Title>We accept</Footer.Title>
          <div>
            <Footer.Cards>
              <FaCcVisa />
            </Footer.Cards>
            <Footer.Cards>
              <FaCcAmazonPay />
            </Footer.Cards>
            <Footer.Cards>
              <FaCcApplePay />
            </Footer.Cards>
            <Footer.Cards>
              <FaCcAmex />
            </Footer.Cards>
            <Footer.Cards>
              <FaCcDinersClub />
            </Footer.Cards>
            <Footer.Cards>
              <FaCcDiscover />
            </Footer.Cards>
            <Footer.Cards>
              <FaCcJcb />
            </Footer.Cards>
            <Footer.Cards>
              <FaCcMastercard />
            </Footer.Cards>
            <Footer.Cards>
              <FaCcPaypal />
            </Footer.Cards>
            <Footer.Cards>
              <FaCcStripe />
            </Footer.Cards>
          </div>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
      <Footer.Text>© 2020 PKP Foods | All Rights Reserved</Footer.Text>
    </Footer>
  );
}
