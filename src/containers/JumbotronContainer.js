import React from "react";

import { Jumbotron } from "../components";

export default function JumbotronContainer() {
  return (
    <Jumbotron img="/images/home/jumbotron/final\ 3.jpg">
      <Jumbotron.Title>Select Order Mode</Jumbotron.Title>
      <Jumbotron.Link href="#">Delivery</Jumbotron.Link>
      <Jumbotron.Link href="#">Take away</Jumbotron.Link>
    </Jumbotron>
  );
}
