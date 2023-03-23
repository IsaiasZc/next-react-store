import React from 'react';
import OrderItem from '@components/OrderItem';
import styles from '@styles/CheckOut.module.scss';
import Head from 'next/head';

const CheckOut = () => {
  return (
    <div class={styles.CheckOut}>
      <Head>
        <title>YardSale | Checkout</title>
      </Head>
      <div class={styles['CheckOut-container']}>
        <h1 class={styles.title}>My order</h1>

        <div class={styles['CheckOut-content']}>
          <div class={styles.order}>
            <p>
              <span>03.25.21</span>
              <span>6 articles</span>
            </p>
            <p>$560.00</p>
          </div>

          <OrderItem />
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
