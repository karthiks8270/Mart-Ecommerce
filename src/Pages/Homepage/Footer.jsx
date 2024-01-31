import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
export default function Footer() {
  return (
    <div style={{display:'grid',gridTemplateColumns:'auto auto auto auto',justifyContent:'space-evenly',gap:50,backgroundColor:'#0c4a6e',color:'white'}}>
        <div>
            <h5><span><FontAwesomeIcon icon={faBagShopping} /></span> Mart</h5>
            <p>Lorem ipsum dolor sit ament,consectetur <br /> 
            adipiscing elit. Auctor libero id et,in <br />
            gravids.Sit diam duis mauris nulla <br />
            cursus.Erat et lectus vel ut sollicitudin <br /> elit at amet</p>
        </div>
        <div>
            <p><b>About Us</b></p>
             <p>Careers</p>
             <p>Our Stories</p>
             <p>Our Cares</p>
             <p>Term & Conditions</p>
             <p>Privacy Policy</p>
        </div>
        <div>
            <p><b>Customer Care</b></p>
            <p>Help Center</p>
            <p>How to Buy</p>
            <p>Track Your Order</p>
            <p>Corporate & Bulk Purchasing</p>
            <p>Returns & Refunds</p>
        </div>
        <div>
            <p><b>Contact Us</b></p>
            <p>70 Washington Square <br />South,New York,NY 10012,<br />United States</p>
            <p>Email:example@gmail.com</p>
            <p>Phone:+1 1123 456 780</p>
        </div>
    </div>
  )
}
