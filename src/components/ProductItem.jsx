import React, { useContext, useState } from 'react';
import Image from 'next/image';
import styles from '@styles/ProductItem.module.scss';
import btAddCart from '@icons/bt_add_to_cart.svg';
import btAddedCart from '@icons/bt_added_to_cart.svg';
import AppContext from '@context/AppContext';

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
  };

  return (
    <div className={styles.ProductItem}>
      {/* Los elemntos externos, deben indicar el tamaño de la imagen */}
      <Image src={product.images[0]} alt={product.title} width={240} height={240} />
      <div className={styles['product-info']}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure className="more-clickable-area" onClick={() => handleClick(product)}>
          <Image src={added ? btAddedCart : btAddCart} alt="button" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
