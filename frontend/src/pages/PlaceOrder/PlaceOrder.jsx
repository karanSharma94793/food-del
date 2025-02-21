import React, { useContext, useEffect, useState } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios'; // Import axios
import {useNavigate} from 'react-router-dom'

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItem, url } = useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(prevData => ({ ...prevData, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();

    let orderItems = [];
    food_list.map((item) => {
      if (cartItem[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItem[item._id];
        orderItems.push(itemInfo);
      }
    });

    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2
    };

    try {
      let response = await axios.post(`${url}/api/order/place`, orderData, {
        headers: { token } // Use `headers` instead of `header`
      });

      if (response.data.success) {
        const { session_url } = response.data;
        window.location.replace(session_url);
      } else {
        alert("Error placing order. Please try again.");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const navigate=useNavigate();
  useEffect(()=>{
    if(!token){
navigate('/cart')
    }
    else if(getTotalCartAmount()===0){
navigate('/cart');
    }
  },[token])
  
  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input 
            required 
            name='firstName' 
            onChange={onChangeHandler} 
            value={data.firstName} 
            type="text" 
            placeholder='First name' 
          />
          <input 
            required 
            name='lastName' 
            onChange={onChangeHandler} 
            value={data.lastName} 
            type="text" 
            placeholder='Last name' 
          />
        </div>
        <input 
          required 
          type="email" 
          name='email' 
          onChange={onChangeHandler} 
          value={data.email} 
          placeholder='Email address' 
        />
        <input 
          required 
          type="text" 
          name='street' 
          onChange={onChangeHandler} 
          value={data.street} 
          placeholder='Street' 
        />
        <div className="multi-fields">
          <input 
            required 
            type="text" 
            name='city' 
            onChange={onChangeHandler} 
            value={data.city} 
            placeholder='City' 
          />
          <input 
            required 
            type="text" 
            name='state' 
            onChange={onChangeHandler} 
            value={data.state} 
            placeholder='State' 
          />
        </div>
        <div className="multi-fields">
          <input 
            required 
            type="text" 
            name='zipcode' 
            onChange={onChangeHandler} 
            value={data.zipcode} 
            placeholder='Zip code' 
          />
          <input 
            required 
            type="text" 
            name='country' 
            onChange={onChangeHandler} 
            value={data.country} 
            placeholder='Country' 
          />
        </div>
        <input 
          required 
          type="text" 
          name='phone' 
          onChange={onChangeHandler} 
          value={data.phone} 
          placeholder='Phone' 
        />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button type='submit'>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
