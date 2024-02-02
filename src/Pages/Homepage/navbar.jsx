import React from 'react';
import { faBagShopping, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Homepage.css'
export default function Navbar() {
    return (
        <div className=''>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light headers" >
                <div className="container">
                    <div>
                        <a className="navbar-brand navMarttext" href="m"><b>  <span><FontAwesomeIcon icon={faBagShopping} /></span> MART</b></a>
                    </div>
                    <div className="navbar-nav features">
                        <a className="nav-link active" href="/"><b>Home</b></a>
                        <a className="nav-link active" href="j"><b>Shop</b></a>
                        <a className="nav-link active" href="j"><b>Cart</b></a>
                        <a className="nav-link active" href="j"><b><FontAwesomeIcon icon={faUser} /></b></a>
                        <a className="nav-link active" href="j"><b><FontAwesomeIcon icon={faShoppingCart} /></b></a>
                    </div>
                </div>
            </nav>
        </div>
    )
}
