import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/ShopContext";
import CartItems from "./CartItems";
import { useNavigate } from "react-router-dom";
import "./cart.css";

function Cart() {

  const navigate = useNavigate()
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  return (
    <div className="cart">
      <div>
        <h1>Your Cart</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItems data={product} />;
          }
        })}
      </div>
      {totalAmount>0 ?
      <div className="checkout">
        <p>Subtotal:${totalAmount}</p>
        <button onClick={()=>navigate('/')}>Continue Shopping</button>
        <button>Checkout</button>
      </div>
      :<h1>Your cart is empty</h1>}
    </div>
  );
}

export default Cart;
