import React from "react";
import { Link } from "./styles/whatsapp";

export default function Whatsapp({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
}
