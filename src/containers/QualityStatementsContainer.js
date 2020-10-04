import React from 'react'
import { QualityStatements } from '../components'

export default function QualityStatementsContainer () {
    return (
        <QualityStatements>
            <QualityStatements.Row>
                <QualityStatements.Column>
                    <QualityStatements.Image src="/images/products/Sweets.jpg" />
                </QualityStatements.Column>
                <QualityStatements.Column>
                    <QualityStatements.Title>Quality Statement</QualityStatements.Title>
                    <QualityStatements.Description>
                        PKP ensures utmost care in each step of its products production &amp;
                        until it reaches to its customers.
                    </QualityStatements.Description>
                </QualityStatements.Column>
            </QualityStatements.Row>

            <QualityStatements.Row>
                <QualityStatements.Column>
                    <QualityStatements.Image src="/images/products/Sweets.jpg" />
                </QualityStatements.Column>
                <QualityStatements.Column>
                    <QualityStatements.Title>The Inception...</QualityStatements.Title>
                    <QualityStatements.Description>
                        The PKP started at RTC X Roads, after a family took a step forward
                        to present Traditional Healthy Snacks as best alternative to counter
                        Junk Food in the market, as the high consumption of JF is one of the 
                        reasons for deteriorating Health &amp; increasing lifestyle diseases such
                        as diabetes &amp; hypertension.
                    </QualityStatements.Description>
                </QualityStatements.Column>
            </QualityStatements.Row>
        </QualityStatements>
    )
}
