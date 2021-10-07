import React from "react";

function Bag(props) {
    return (

        <div className="home-products">
            <h2 className="text-center">Your product</h2>
            <hr />
            <div className="row">

                {props.addItems.map(selected =>
                    <div className="col-md-4">
                        <div className="products bag">
                            <img src={selected.itemImage} alt={selected.itemTitle} />
                            <p>{selected.itemTitle}</p>
                            <p> Rs. {selected.productPrice} × {selected.itemQty}</p>
                            <button className="btn-warning  btn increase">+</button>
                            <button className="btn-success btn decrease">-</button>
                        </div>

                    </div>
                )}
            </div>
        </div>

    );
}

export default Bag;
