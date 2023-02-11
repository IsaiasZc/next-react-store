import React, { useContext, useState } from "react";
import "@styles/ProductItem.scss";
import btAddCart from "@icons/bt_add_to_cart.svg";
import btAddedCart from "@icons/bt_added_to_cart.svg";
import AppContext from "@context/AppContext";

const ProductItem = ({ product }) => {
  const { addToCart, removeFromCart } = useContext(AppContext);
  const [added, setAdded] = useState(false);

  const handleClick = (item) => {
    added ? removeFromCart(item) : addToCart(item, setAdded);
    // addToCart(item, setAdded);
    switchAdded();
  };
  
  const switchAdded = () => {
    setAdded(!added);
  }

  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={ added ? btAddedCart : btAddCart } alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
