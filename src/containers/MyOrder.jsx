import React, { useContext } from 'react';
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
      <div className="title-container">
        <img className="MyOrder-arrow" src={flechita} alt="arrow" onClick={changeToggle} />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        <div className="order-items">
          {state.cart.map((product) => (
            <OrderItem product={product[0]} callBack={product[1]} key={`orderItem-${product.id}`} />
          ))}
        </div>
        <div className="total-order">
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

export default MyOrder;
