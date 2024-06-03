import React from 'react'
import './ProductDisplay.css'
import star from '../Assets/star.png'
import star_null from '../Assets/star_null.png'

export const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="product-display-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className = 'productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star_null} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">
                    &#8377;{product.old_price}
                </div>
                <div className="productdisplay-right-price-new">
                    &#8377;{product.new_price}
                </div>
            </div>
            <div className="productdisplay-right-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sed itaque excepturi, aperiam et sunt quis magni quam iusto nemo incidunt saepe accusamus officia voluptate iste esse similique repudiandae animi vero optio vel error deleniti libero? Minima autem nisi id ducimus expedita nostrum labore ullam qui quas saepe? Voluptatum, blanditiis?
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-size">
                    <div>XS</div>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                </div>
            </div>
            <button>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category: </span>Women, T-Shirt, Crop Top</p>
            <p className='productdisplay-right-category'><span>Tags: </span>Modern, Latest</p>
        </div>
    </div>
  )
}
