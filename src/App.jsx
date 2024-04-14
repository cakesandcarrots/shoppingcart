import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Homepage from "./homepage/Homepage";
import Storepage from "./storepage/Storepage";
import Cart from "./storepage/Cart";
import cartlogo from "./assets/cart.svg";
import "./assets/App.css";
import { Navigate } from "react-router-dom";

function App() {
  const [items, setItems] = useState([]);
  function handleclick(newitem) {
    let data = items.find((item) => item.id == newitem.id);
    if (data === undefined) setItems([...items, newitem]);
    else {
      data.quantity = data.quantity + newitem.quantity;
    }
  }

  function delitem(delid) {
    const updateditems = items.filter((item) => item.id != delid);
    setItems(updateditems);
  }

  function clearitems() {
    setItems([]);
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
        <Route path="Homepage" exact element={<Homepage></Homepage>}></Route>
        <Route
          path="Storepage"
          element={<Storepage ordereditem={handleclick}></Storepage>}
        ></Route>
        <Route
          path="Cart"
          element={
            <Cart
              clearitems={clearitems}
              delitemfunc={delitem}
              itemsarray={items}
            ></Cart>
          }
        ></Route>
        <Route path="*" element={<Navigate to="Homepage" />} />
      </Routes>
    </>
  );
}

export default App;
