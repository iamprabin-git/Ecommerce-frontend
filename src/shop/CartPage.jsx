import React, { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import delImgUrl from '../assets/images/shop/del.png';
import CheckOutPage from './CheckOutPage';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // fetch cart items from local storage
        const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(storedCartItems);
    }, [])
    // claculate the price
    const calculateTotalPrice = (item) => {
        return item.price * item.quantity;
    }

    // handle Quantity increase
    const handleIncrease = (item) => {
        item.quantity += 1;
        setCartItems([...cartItems]);
        // update local storage with new items
        localStorage.setItem("cart", JSON.stringify(cartItems));
    };

    // handle Quantity Decrease
    const handleDecrease = (item) => {
        if (item.quantity > 1) {
            item.quantity -= 1;
            setCartItems([...cartItems])
            // update local storage with new items
            localStorage.setItem("cart", JSON.stringify(cartItems));
        }
    };
    // handle item remove
    const handleRemoveItem = (item) => {
        const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);

        // update new cart
        setCartItems(updatedCart);
        updateLocalStorage(updatedCart);
    }
    const updateLocalStorage = (cart) => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    // cart subtotal
    const cartSubTotal = cartItems.reduce((total, item) => {
        return total + calculateTotalPrice(item);
    }, 0)

    // order total
    const orderTotal = cartSubTotal;

    return (
        <div>
            <PageHeader title={"Shop Cart"} curPage={"Cart Page"} />
            <div className='shop-cart padding-tb'>
                <div className='container'>
                    <div className='section-wrapper'>
                        {/* cart top */}
                        <div className='cart-top'>
                            <table>
                                <thead>
                                    <tr>
                                        <th className='cat-product'>Product</th>
                                        <th className='cat-price'>Price</th>
                                        <th className='cat-quantity'>Quantity</th>
                                        <th className='cat-toprice'>Total</th>
                                        <th className='cat-edit'>Edit</th>
                                    </tr>
                                </thead>
                                {/* table body */}
                                <tbody>
                                    {
                                        cartItems.map((item, indx) => (
                                            <tr key={indx}>
                                                <td className='product-item cat-product'>
                                                    <div className='p-thumb'>
                                                        <Link to="/shop"><img src={item.img} alt="" /></Link>

                                                    </div>
                                                    <div className='p-content'>
                                                        <Link to="/shop">{item.name}</Link>

                                                    </div>
                                                </td>
                                                <td className='cat-price'>Rs. {item.price}</td>
                                                <td className='cat-quantity'>
                                                    <div className='cart-plus-minus'>
                                                        <div className='dec qtybutton' onClick={() => handleDecrease(item)}>-</div>
                                                        <input type="text" className='cart-plus-minus-box' name='qtybutton' value={item.quantity} />
                                                        <div className='inc qtybutton' onClick={() => handleIncrease(item)}>+</div>
                                                    </div>
                                                </td>
                                                <td className='cat-toprice'>Rs. {calculateTotalPrice(item)}</td>
                                                <td className='cat-edit'>
                                                    <a href="#" onClick={() => handleRemoveItem(item)}>
                                                        <img src={delImgUrl} alt="" />
                                                    </a>

                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>

                        </div>
                        {/* cart top endas */}
                        {/* cart bottom */}
                        <div className='cart-bottom'>
                            {/* checkout box */}
                            <div className='cart-checkout-box'>
                                <form className='coupon'>
                                    <input className='cart-page-input-text' type="text" name='coupon' id='coupon' placeholder='coupon code ....' />
                                    <input type="submit" value={"Apply Coupon"} />
                                </form>
                                <form className='cart-checkout'>
                                    <input type="submit" value="Update Cart" />
                                    <div>
                                        <CheckOutPage/>
                                    </div>
                                </form>

                            </div>
                            {/* check out box end */}
                            {/* Shooping box */}
                            <div className='shiping-box'>
                                <div className='row'>
                                    <div className='col-md-6 col-12'>
                                        <div className='calculate-shiping'>
                                            <h3>Calculate Shippng</h3>
                                            <div className="outline-select">
                                                <select>
                                                    <option value="uk">United Kingdom</option>
                                                    <option value="pak">pakistan</option>
                                                    <option value="np">Nepal</option>
                                                </select>
                                                <span className='select-icon'>
                                                    <i className='icofont-rounded-down'></i>
                                                </span>
                                            </div>
                                            <div className='outline-select shipping-select'>
                                            <select>
                                                    <option value="ktm">KathMandu</option>
                                                    <option value="ltp">Lalitpur</option>
                                                    <option value="bkt">Bhaktapur</option>
                                                </select>
                                                <span className='select-icon'>
                                                    <i className='icofont-rounded-down'></i>
                                                </span>
                                            </div>
                                            <input type="text" name='postalCode' id='postalCode' placeholder='Postalcode/Zip' className='cart-page-input-text' />
                                            <button type='submit'>Update Address</button>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-12'>
                                         <div className='cart-overview'>
                                            <h3>Cart Totals</h3>
                                            <ul className='lab-ul'>
                                                <li>
                                                    <span className='pull-left'>Cart Subtotal</span>
                                                    <p className='pull-right'>  Rs. {cartSubTotal}</p>
                                                </li>
                                                <li>
                                                    <span className='pull-left'>Delivery Charges</span>
                                                    <p className='pull-right'> Free Delivery</p>
                                                </li>
                                                <li>
                                                    <span className='pull-left'>Order Total</span>
                                                    <p className='pull-right'> Rs. {orderTotal.toFixed(2)}</p>
                                                </li>
                                            </ul>

                                         </div>
                                         </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default CartPage
