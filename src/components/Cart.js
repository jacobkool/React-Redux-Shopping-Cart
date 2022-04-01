import React from 'react';
import {connect} from 'react-redux';
import {productQuantity} from '../actions/productQuantity'
import {clearProduct} from '../actions/clearProduct'
import '../App.css'

function Cart(props) {
    console.log(props.cartProps)

    let productsInCart = [

    ]

    Object.keys(props.cartProps.products).forEach( function(item) {
        console.log(item)
        console.log(props.cartProps.products[item].inCart)
        if(props.cartProps.products[item].inCart) {
            productsInCart.push(props.cartProps.products[item])
        }
        console.log(productsInCart)
    })

    productsInCart = productsInCart.map((product, index) => {
        return (
            <React.Fragment key={index}>
                <div className="product"><ion-icon onClick={() => props.clearProduct(product.tagName)} name="close-circle"></ion-icon><img src={product.img}/>
                    <span className="sm-hide">{product.name}</span>
                </div>
                <div className="price sm-hide">${product.price}</div>
                <div className="quantity">
                    <ion-icon onClick={() => props.productQuantity('decrease', product.tagName)} className="decrease" name="arrow-back-circle-outline"></ion-icon>
                        <span>{product.number}</span>
                    <ion-icon onClick={() => props.productQuantity('increase', product.tagName)} className="increase" name="arrow-forward-circle-outline"></ion-icon>
                </div>
                <div className="total">${product.number * product.price}</div>
            </React.Fragment>
        )
    })

    return (
        <div className="container-products">
            <div className="product-header">
                <h5 className="product-title">Product</h5>
                <h5 className="price sm-hide">Price</h5>
                <h5 className="quantity">Quantity</h5>
                <h5 className="total">Total</h5>
            </div>   
            <div className="products">
                {productsInCart}
            </div>
            <div className="cartTotalContainer">
                <h4 className="cartTotalTitle">Cart Total</h4>
                <h4 className="cartTotal">${props.cartProps.cartCost}</h4>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    cartProps: state.cartState
  })


export default connect(mapStateToProps, {productQuantity, clearProduct})(Cart)