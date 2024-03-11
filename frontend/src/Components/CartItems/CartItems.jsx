import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/remove_icon.png';

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(ShopContext);

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={e.image} alt="" className='cartitems-product-icon' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <div>
                                    <button onClick={() => decreaseQuantity(e.id)}>-</button>
                                    <button className='cartitmes-quantity'>{cartItems[e.id]}</button>
                                    <button onClick={() => increaseQuantity(e.id)}>+</button>
                                </div>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <img className='cartitmes-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping free</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                            <button>PROCEED TO CHECKOUT</button>
                        </div>
                    </div>
                   
                </div>
                <div className="cartitems-promocode">
                    <p>IF u have a promocode,Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;
