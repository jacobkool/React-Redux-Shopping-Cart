import React, { useEffect } from 'react';
import '../App.css'
import {connect} from 'react-redux'
import { getNumbers } from '../actions/getAction'
import {Link} from 'react-router-dom'

function NavBar(props) {
  console.log(props.cartProps)

  useEffect(() => {
    getNumbers()
  }, [])
    return (
        <header>
        <div className="overlay"></div>
        <nav>
          <h2>Shop</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li className="cart"><Link to="/cart"><ion-icon name="cart-outline"></ion-icon>Cart<span>{props.cartProps.cartNumber}</span></Link></li>
          </ul>
        </nav>
      </header>
    )
}

const mapStateToProps = state => ({
  cartProps: state.cartState
})

export default connect(mapStateToProps, {getNumbers})(NavBar)