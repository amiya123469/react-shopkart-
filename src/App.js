import React, { useState } from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Bag from "./components/Bag";
import { Switch, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {

  const [cartItems, setCatItems] = useState([]);
  const handleClick = (image, title, price) => {
    if (!cartItems.includes({ itemImage: image, itemTitle: title, productPrice: price })) {
      setCatItems([...cartItems, { itemImage: image, itemTitle: title, productPrice: price }]);
    } else {
      alert("item is already exists");
    }
  };

  return (
    <div>
      <Header numOfItem={cartItems.length} />

      <Switch>
        <Route path="/" exact>
          <Home newItems={handleClick} />
        </Route>
        <Route path="/about" exact >
          <About />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/bag" exact>
          <Bag


            addItems={cartItems} />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
