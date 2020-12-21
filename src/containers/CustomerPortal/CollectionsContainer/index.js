import React, { useEffect, useState } from "react";
import axios from "axios";

import { Collections } from "../../../components/customerPortal";

export default function CollectionsCardContainer({ ...restProps }) {
  const [categories, setCategories] = useState([]);

  const fetchCategories = () => {
    axios.get("http://localhost:8080/getFamilies").then((res) => {
      setCategories(res.data);
    });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div>
      <Collections>
        <Collections.Title>{restProps.title}</Collections.Title>
        <Collections.Row>
          {console.log("Executing")}
          {categories
            .filter((category) =>
              restProps.viewCategories === undefined
                ? category
                : restProps.viewCategories.includes(category.familyName)
            )
            .map((category, index) => (
              <Collections.Card
                to={{
                  pathname: `/collections/${category.familyName}`,
                  state: category,
                }}
                key={index}
                img="/images/products/Sweets.jpg"
                title={category.familyName}
                desc="desc"
              />
            ))}
        </Collections.Row>
      </Collections>
    </div>
  );
}
