import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import styles from '@styles/MyOrder.module.scss';
import flechita from '@icons/flechita.svg';

const MyOrder = () => {
  const { state, changeToggle } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue[0].price;
    const sum = state.cart.reduce(reducer, 0);

    return sum;
  };

  return (
    <aside className={styles.MyOrder}>
      <div className={styles['title-container']}>
        <Image className={styles['MyOrder-arrow']} src={flechita} alt="arrow" onClick={changeToggle} />
        <p className={styles.title}>My order</p>
      </div>
      <div className={styles['my-order-content']}>
        <div className={styles['order-items']}>
          {state.cart.map((product) => (
            <OrderItem product={product[0]} callBack={product[1]} key={`orderItem-${product.id}`} />
          ))}
        </div>
        <div className={styles['total-order']}>
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <Link href="/checkout">
          <button className={styles['primary-button']}>Checkout</button>
        </Link>
      </div>
    </aside>
  );
};

export default MyOrder;
