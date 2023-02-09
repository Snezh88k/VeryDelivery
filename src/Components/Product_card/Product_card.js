import React, { useState, useEffect } from "react";

import "./Product_card.css";

const ProductCard = (props) => {
  const {
    id,
    backgroundImage,
    catagory,
    country,
    makeBy,
    nalichie,
    name,
    pod_category,
    price,
    weight,
  } = props.data;

  const [count, setCount] = useState(0);

  useEffect(() => {
    localStorage.getItem(id) === "0"
      ? localStorage.removeItem(id)
      : setCount(Number(localStorage.getItem(id)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const add = () => {
    setCount(count + 1);
  };

  const minuc = () => {
    if (count === 0) {
      return;
    }

    setCount(count - 1);
  };

  useEffect(() => {
    localStorage.setItem(id, count);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <div className="card">
      <div className="img_box">
        <img className="img_prod" src={backgroundImage} alt="BigCo Inc. logo" />
      </div>
      <div className="price">{price}</div>
      <div>{name}</div>
      <div className="weight">{weight}</div>

      <div className="quantity">
        <div className="remove_from_cart" onClick={minuc}>
          -
        </div>
        <div className="count">{count}</div>
        <div className="add_to_cart" onClick={add}>
          +
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
