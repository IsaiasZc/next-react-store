import React, { useState, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@logos/logo_yard_sale.svg';
import MyOrder from '@containers/MyOrder';
import menu from '@icons/icon_menu.svg';
import AppContext from '@context/AppContext';
import shopping from '@icons/icon_shopping_cart.svg';
import Menu from '@components/Menu';

import styles from '@styles/Header.module.scss';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  // const [toggleOrders, setToggleOrders] = useState(false);
  const { state, changeToggle } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className={styles.Nav}>
      <Image src={menu} alt="menu" className={styles.menu} />

      <div className={styles['navbar-left']}>
        <Link href="/">
          <Image src={logo} alt="logo" className={styles['nav-logo']} />
        </Link>
        <ul>
          <li>
            <Link href="/">All</Link>
          </li>
          <li>
            <Link href="/">Clothes</Link>
          </li>
          <li>
            <Link href="/">Electronics</Link>
          </li>
          <li>
            <Link href="/">Furnitures</Link>
          </li>
          <li>
            <Link href="/">Toys</Link>
          </li>
          <li>
            <Link href="/">Others</Link>
          </li>
        </ul>
      </div>

      <div className={styles['navbar-right']}>
        <ul>
          <li className={styles['navbar-email']} onClick={handleToggle}>
            platzi@example.com
          </li>
          <li
            className={styles['navbar-shopping-cart']}
            // onClick={() => setToggleOrders(!toggleOrders)}
            onClick={changeToggle}
          >
            <Image src={shopping} alt={styles['shopping cart']} />
            {(state.cart.length || null) && <div>{state.cart.length}</div>}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {state.toggleOrders && <MyOrder />}
    </nav>
  );
};

export default Header;
