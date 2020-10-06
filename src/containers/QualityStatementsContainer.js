import React from "react";
import { QualityStatements } from "../components";

export default function QualityStatementsContainer() {
  return (
    <QualityStatements>
      <QualityStatements.Row>
        <QualityStatements.Column>
          <QualityStatements.Image src="/images/products/Sweets.jpg" />
        </QualityStatements.Column>
        <QualityStatements.Column>
          <QualityStatements.Title>Quality Statement</QualityStatements.Title>
          <QualityStatements.Description>
            PKP ensures utmost care in each step of its products production
            &amp; until it reaches to its customers.
          </QualityStatements.Description>
        </QualityStatements.Column>
      </QualityStatements.Row>
    </QualityStatements>
  );
}
