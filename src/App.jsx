import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Link, Route, Routes } from "react-router-dom";
import Homepage from "./homepage/Homepage";
import Storepage from "./storepage/Storepage";
import Cart from "./storepage/Cart";
import cartlogo from "./assets/cart.svg"

import "./App.css";
function App() {
  const [items, setItems] = useState([]);
  function handleclick(newitem) {
    setItems([...items, newitem]);
  }

  function delitem(delid) {
    const updateditems = items.filter((item) => item.id != delid);
    setItems(updateditems);
  }

  return (
    <>
      <h1 className="Title">Welcome to Shopping Site</h1>
      <nav className="nav">
        <ul>
          <li className="active">
            <Link to="Homepage">Home</Link>
          </li>
          <li>
            <Link to="Storepage">Store</Link>
          </li>
          <li>
            <Link to="Cart">
              <img className="cartimage" src={cartlogo} alt="" />
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="Homepage" element={<Homepage></Homepage>}></Route>
        <Route
          path="Storepage"
          element={<Storepage ordereditem={handleclick}></Storepage>}
        ></Route>
        <Route
          path="Cart"
          element={<Cart delitemfunc={delitem} itemsarray={items}></Cart>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
