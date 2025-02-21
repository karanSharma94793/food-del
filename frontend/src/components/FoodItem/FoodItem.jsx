import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, description, price, image }) => {
    const { cartItem, addToCart, removeFromCart,url } = useContext(StoreContext);

    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img src={url+"/images/"+image} alt={name} className="food-item-image" />
                {
                    !cartItem[id] ? (
                        <img 
                            className='add' 
                            onClick={() => addToCart(id)} 
                            src={assets.add_icon_white} 
                            alt="Add to Cart" 
                        />
                    ) : (
                        <div className='food-item-counter'>
                            <img 
                                onClick={() => removeFromCart(id)}  
                                src={assets.remove_icon_red} 
                                alt="Remove from Cart" 
                            />
                            <p>{cartItem[id]}</p>
                            <img 
                                onClick={() => addToCart(id)} 
                                src={assets.add_icon_green} 
                                alt="Add to Cart" 
                            />
                        </div>
                    )
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="Rating" />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>
    );
};

export default FoodItem;
