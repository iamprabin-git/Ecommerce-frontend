import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const desc = " this is available for best quality with reasonable price"
const ProductDisplay = ({ item }) => {
    const { name, id, price, seller, ratingsCount, quantity, img } = item;

    const [prequantity, setQuantity] = useState(quantity);
    const [coupon, setCoupon] = useState("");
    const [size, setSize] = useState("select size");
    const [color, setColor] = useState("select Color");

    const handleSizeChange = (e) => {
        setSize(e.target.value)
    }

    const handleColorChange = (e) => {
        setColor(e.target.value)
    }
    const handleDecrease = () => {
        if (prequantity > 1) {
            setQuantity(prequantity - 1)
        }
    }

    const handleIncrease = () => {
        setQuantity(prequantity + 1)
    }
    const handleSubmit =(e) =>{
        e.preventDefault();
        const product = {
            id: id,
            img: img,
            name: name,
            price: price,
            quantity: prequantity,
            size: size,
            color: color,
            coupon: coupon
        }
        const existingCart =JSON.parse(localStorage.getItem("cart")) || [];
        const existingProductIndex=existingCart.findIndex((item) => item.id === id);

        if (existingProductIndex !== -1) {
            existingCart[existingProductIndex].quantity += prequantity;
        }else{
            existingCart.push(product);
        }
        // update local storage
        localStorage.setItem("cart", JSON.stringify(existingCart));
        // reset form Field
        setQuantity(1);
        setSize("select size");
        setColor("select Color");
        setCoupon("");
    }
    return (
        <div>
            <div>
                <h4>{name}</h4>
                <p className='rating'>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <span>{ratingsCount} review</span>
                </p>
                <h4>Rs.{price}</h4>
                <h6>{seller}</h6>
                <p>{desc}</p>

            </div>
            {/* cart components */}
            <div>
                <form onSubmit={handleSubmit}>
                    {/* sizes of produt */}
                    <div className='select-product size'>
                        <select value={size} onChange={handleSizeChange}>
                            <option>Select Size</option>
                            <option >SM</option>
                            <option >MD</option>
                            <option >LG</option>
                            <option >XL</option>
                            <option >XXL</option>
                        </select>
                        <i className='icofont-rounded-down'></i>
                    </div>
                    {/* Colors of products */}
                    <div className='select-product color'>
                        <select value={color} onChange={handleColorChange}>
                            <option>Select Color</option>
                            <option >Red</option>
                            <option >Green</option>
                            <option >Yellow</option>
                            <option >Black</option>
                            <option >Blue</option>
                            <option >white</option>
                            <option >Ash</option>
                        </select>
                        <i className='icofont-rounded-down'></i>
                    </div>
                    {/* Cart plus Minus */}
                    <div className='cart-plus-minus'>
                        <div className='dec qtybutton' onClick={handleDecrease}>-</div>
                        <input className='cart-plus-minus-box' type="text" name='qtybutton' id='qtybutton' value={prequantity}
                            onChange={(e) => setQuantity(parseInt(e.target.value, 10))} />
                        <div className='inc qtybutton' onClick={handleIncrease}>+</div>

                    </div>
                    {/* coupon field */}
                    <div className='discount-code mb-2'>
                        <input type="text" placeholder='Enter promo code' onChange={(e) => setCoupon(e.target.value)} />

                    </div>
                    {/* button section */}
                    <button type='submit' className='lab-btn'>
                        <span>Add to Cart</span>
                    </button>
                    <Link to="/cart-page" className='lab-btn bg-primary'>
                        <span>check out</span>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default ProductDisplay
