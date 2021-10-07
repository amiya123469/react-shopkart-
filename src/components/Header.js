import React from 'react'
import Bookings from './Bookings'
import { Link } from "react-router-dom"

function Header(props) {
    return (
        <section className="nav-bar">
            <nav>
                <div className="logo">
                    <h2>ShopKart</h2>
                </div>
                <div>

                    <ul className="nav-items">
                        <li ><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>

                </div>
                <Bookings
                    bagItems={props.numOfItem}
                />
            </nav>
        </section>
    )
}

export default Header
