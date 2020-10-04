import React from 'react'
import { Footer } from '../components'

export default function FooterContainer () {
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
                    <Footer.Link href="#">Email: example@domain.com</Footer.Link>
                    <Footer.Link href="#">Contact: 040-1234 5678</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Connect with us</Footer.Title>
                    <Footer.Link href="#">Instagram</Footer.Link>
                    <Footer.Link href="#">Facebook</Footer.Link>
                    <Footer.Link href="#">WhatsApp</Footer.Link>
                    <Footer.Title>We accept</Footer.Title>
                    <Footer.Link href="#">Visa</Footer.Link>
                    <Footer.Link href="#">Master card</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            <Footer.Break />
            <Footer.Text>© 2020 PKP Foods | All Rights Reserved</Footer.Text>
        </Footer>
    )
}
