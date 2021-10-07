import React from 'react'


function Home(props) {
    return (
        <div className="home-products">
            <div className="products">
                <img src={props.image} alt={props.title} />
                <p>{props.title}</p>
                <p className="text-light p-2" > Rs. {props.price}</p>
                <button className="btn click-buton btn-warning" onClick={() => props.onAdd(props.image, props.title, props.price,)}>Buy Now</button>
            </div>
        </div>
    )

}

export default Home;