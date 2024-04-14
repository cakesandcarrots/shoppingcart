import "../assets/Homepage.css";
import { Link, Route, Routes } from "react-router-dom";
import Storepage from "../storepage/Storepage";

function Homepage() {
  return (
    <>
      <div className="contentwrapper">
        <div className="top">
          <Link to="/Storepage">
            <img
              className="clothes"
              src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              title="Clothes"
            />
          </Link>

          <Link to="/Storepage">
            <img
              alt="shoes"
              className="shoes"
              src="https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              title="Shoes"
            />
          </Link>
        </div>
        <div className="bottom">
          <Link to="/Storepage">
            <img
              className="extra"
              src="https://images.pexels.com/photos/264591/pexels-photo-264591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              title="Accessories"
            />
          </Link>
        </div>
        <Routes>
          <Route path="/Storepage" element={<Storepage></Storepage>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default Homepage;
