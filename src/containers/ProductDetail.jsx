import React from 'react';
import Image from 'next/image';
import ProductInfo from '@components/ProductInfo';
import '@styles/ProductDetail.scss';
import iconClose from '@icons/icon_close.png';

const ProductDetail = () => {
  return (
    <aside className="ProductDetail">
      <div className="ProductDetail-close">
        <Image src={iconClose} alt="close" />
      </div>
      <ProductInfo />
    </aside>
  );
};

export default ProductDetail;
