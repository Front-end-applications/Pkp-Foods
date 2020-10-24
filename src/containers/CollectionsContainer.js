import React from "react";

import * as ROUTES from "../constants/routes";
import { Collections } from "../components";

const categories = [
  {
    img: "/images/products/Sweets.jpg",
    title: "Card Title",
    desc: "Card Description",
  },
  {
    img: "/images/products/Sweets.jpg",
    title: "Card Title",
    desc: "Card Description",
  },
  {
    img: "/images/products/Sweets.jpg",
    title: "Card Title",
    desc: "Card Description",
  },
  {
    img: "/images/products/Sweets.jpg",
    title: "Card Title 2",
    desc: "Card Description",
  },
  {
    img: "/images/products/Sweets.jpg",
    title: "Card Title 3",
    desc: "Card Description",
  },
  {
    img: "/images/products/Sweets.jpg",
    title: "Card Title 3",
    desc: "Card Description",
  },
];

export default function CollectionsCardContainer({ ...restProps }) {
  return (
    <div>
      <Collections>
        <Collections.Title>{restProps.title}</Collections.Title>
        <Collections.Row>
          {categories
            .filter((category) =>
              restProps.viewCategories === undefined
                ? category
                : restProps.viewCategories.includes(category.title)
            )
            .map((category, index) => (
              <Collections.Card
                to={ROUTES.PRODUCTS}
                key={index}
                img={category.img}
                title={category.title}
                desc={category.desc}
              />
            ))}
        </Collections.Row>
      </Collections>
    </div>
  );
}
