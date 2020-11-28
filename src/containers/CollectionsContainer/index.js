import React, { useEffect, useState } from "react";
import axios from "axios";

import { Collections } from "../../components";

export default function CollectionsCardContainer({ ...restProps }) {
  const [categories, setCategories] = useState([]);

  const fetchCategories = () => {
    axios.get("http://localhost:8080/getFamilies").then((res) => {
      console.log(res.data);
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
          {categories
            .filter((category) =>
              restProps.viewCategories === undefined
                ? category
                : restProps.viewCategories.includes(category.title)
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
