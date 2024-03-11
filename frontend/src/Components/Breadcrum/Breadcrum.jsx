import React from 'react';
import './Breadcrum.css';
import arrowIcon from '../Assets/breadcrum_arrow.png';

const Breadcrum = (props) => {
  const { product } = props;
  console.log(product);

  return (
    <div className='breadcrum'>
      <span>HOME</span>
      <img src={arrowIcon} alt="" />
      <span>SHOP</span>
      <img src={arrowIcon} alt="" />
      {product && product.category && ( // Check if product and category exist
        <>
          <span>{product.category}</span>
          <img src={arrowIcon} alt="" />
        </>
      )}
      <span>{product?.name || 'Unknown Product'}</span> {/* Use optional chaining */}
    </div>
  );
};

export default Breadcrum;
