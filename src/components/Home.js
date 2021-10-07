import axios from 'axios'
import React from 'react'
import Products from "./Products"

function Home(props) {
    const [data, setdata] = React.useState(null);

    React.useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((response) => {
                setdata(response.data);
                console.log(response.data);
            })
    }, []);

    if (!data) return null;

    return (
        <div>
            {data.map((item) =>

                <Products
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    onAdd={props.newItems}
                />
            )}

        </div>
    )
}

export default Home
