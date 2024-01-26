import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Link, Route, Routes } from "react-router-dom";
import Homepage from "./homepage/Homepage";
import Storepage from "./storepage/Storepage";

function App() {
  return (
    <>
      <h1 className="Title">Welcome to Shopping Site</h1>
      <nav className="nav">
        <ul>
          <li className="active">
            <Link to="/Homepage">Home</Link>
          </li>
          <li>
            <Link to="/Storepage">Store</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/Homepage" element={<Homepage></Homepage>}></Route>
        <Route path="/Storepage" element={<Storepage></Storepage>}></Route>
      </Routes>
    </>
  );
}

export default App;
