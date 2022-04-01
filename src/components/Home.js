import React from 'react';
import {useState} from 'react'
import {surfboardimg, wetsuitimg, waximg, hoodieimg} from '../images/StoreImages'
import {connect} from 'react-redux';
import {addToCart} from '../actions/addAction'

const Home = (props) => {
    console.log(props)
    return(
        <div className="container">
            <div className="image">
                <img 
                    src={surfboardimg} 
                    alt="Surfboard"
                 />
                <h3>8 ft Surfboard</h3>
                <h3>$300</h3>
                <a onClick={() => props.addToCart('surfboard')} className="addToCart cart1" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img 
                    src={wetsuitimg}
                    alt="Wetsuit" 
                />
                <h3>Wetsuit</h3>
                <h3>$150</h3>
                <a onClick={() => props.addToCart('wetsuit')} className="addToCart cart2" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img 
                    src={waximg}
                    alt="Surf Wax" 
                />
                <h3>Surfboard Wax</h3>
                <h3>$15</h3>
                <a onClick={() => props.addToCart('surfwax')} className="addToCart cart3" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img 
                    src={hoodieimg}
                    alt="Hoodie"
                 />
                <h3>California Hoodie</h3>
                <h3>$45</h3>
                <a onClick={() => props.addToCart('hoodie')} className="addToCart cart4" href="#">Add to Cart</a>
            </div>
        </div>
    );
}

export default connect(null, {addToCart})(Home);