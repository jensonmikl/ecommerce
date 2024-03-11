import React from 'react';
import './RelatedProduct.css';
import { Link } from 'react-router-dom';

const RelatedProduct = ({ products }) => {
  console.log(products);
  return (
    <div className="related-products">
      <h2>Related Products</h2>
      <div className="product-list">
        {products && products.length > 0 ? (
          products.map(product => (
            <div key={product.id} className="related-products-item">
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>${product.price}{console.log(product.id)}</p>
              </Link>
            </div>
          ))
        ) : (
          <p>No related products found.</p>
        )}
      </div>
    </div>
  );
        };

export default RelatedProduct;
