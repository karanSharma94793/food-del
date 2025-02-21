import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
        <img style={{ width: "120px" }} src={assets.logo} alt="Logo" />

<p>Tasty - Your favorite meals delivered hot and fresh! From delicious pizzas to mouth-watering desserts, we bring the best flavors to your doorstep. Order now and enjoy quick delivery, exclusive discounts, and a hassle-free experience. Savor every bite with Tasty!</p>
<div className="footer-social-icon">
<img src={assets.facebook_icon} alt="" />
<img src={assets.twitter_icon} alt="" />
<img src={assets.linkedin_icon} alt="" />
</div>
        </div>
        <div className="footer-content-center">
<h2>COMPANY</h2>
<ul>
    <li>Home</li>
    <li>About Us</li>
    <li>Delivery</li>
    <li>Privacy policy</li>
</ul>

        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+882-192-5343#</li>
                <li>Tasty@gmail.com</li>
            </ul>

        </div>
      </div>
      <hr />
        <p className="footer-copyright"> Copyright 2024 @ Tasty.com - All Right Reserved.</p>  
      
    </div>
  )
}

export default Footer
