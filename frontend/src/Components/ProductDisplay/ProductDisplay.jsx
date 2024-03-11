import React from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = ({ product }) => {
    const { addToCart } = useContext(ShopContext);

    if (!product) {
        return <div className='productdisplay'>Product not found</div>;
    }

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    {product.image && (
                        <>
                            <img src={product.image} alt="" />
                            <img src={product.image} alt="" />
                            <img src={product.image} alt="" />
                            <img src={product.image} alt="" />
                        </>
                    )}
                </div>
                <div className='productdisplay-img'>
                    {product.image && (
                        <img className='productdisplay-main-img' src={product.image} alt="" />
                    )}
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    {[...Array(5)].map((_, index) => (
                        <img key={index} src={index < product.rating ? star_icon : star_dull_icon} alt="" />
                    ))}
                    <p>({product.reviews})</p>
                </div>
                <div className='productdisplay-right-prices'>
                    <div className="productdisplay-right-prices-old">${product.old_price}</div>
                    <div className="productdisplay-right-prices-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    {product.description}
                </div>
                <div className="product-display-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>s</div>
                        <div>m</div>
                        <div>l</div>
                        <div>xl</div>
                        <div>xxl</div>
                    </div>
                </div>
                <button onClick={() => { addToCart(product.id) }}>Add to cart</button>
                <p className='productdisplay-right-category'><span>Category :</span> {product.category}</p>
            </div>
        </div>
    );
}

export default ProductDisplay;
