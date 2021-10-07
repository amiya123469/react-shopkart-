import React from "react";
import { Link } from "react-router-dom";

function Bookings(props) {
    return (
        <div className="cart">

            <button className="btn btn-outline-primary">
                <Link to="/bag">cart {props.bagItems}</Link>
            </button>

        </div>
    );
}

export default Bookings;
