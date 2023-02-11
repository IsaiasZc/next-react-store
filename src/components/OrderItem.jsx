import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import styles from '@styles/OrderItem.module.scss';
import close from '@icons/icon_close.png';

const OrderItem = ({ product, callBack }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (productI) => {
    removeFromCart(productI);
    callBack();
  };

  return (
    <div className={styles.OrderItem}>
      <figure>
        <Image src={product?.images[0]} alt={product?.title} width={70} height={70} />
      </figure>
      <p>{product?.title}</p>
      <p>${product?.price}</p>
      <Image src={close} alt="close" onClick={() => handleRemove(product)} />
    </div>
  );
};

export default OrderItem;
