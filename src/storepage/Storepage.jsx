import { useEffect, useState } from "react";
import Cart from "./Cart";
export default function Storepage({ ordereditem }) {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  function handleclick(image) {
    if (quantity > 0) {
      image.quantity = quantity;
      ordereditem(image);
    }
  }

  return (
    <>
      <ul className="productWrapper">
        {products.map((image) => (
          <li className="perproduct" key={image.id}>
            <img className="cards" src={image.image} alt="" />
            <div className="inputwrapper">
              <input
                key={image.id}
                className="inputfield"
                type="number"
                min="1"
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              />
              <button
                className="addtocart"
                onClick={() => {
                  handleclick(image);
                }}
              >
                Add to cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
