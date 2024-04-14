import { useEffect, useState } from "react";
export default function Storepage({ ordereditem }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    
    fetch("https://fakestoreapi.com/products", { signal })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setProducts(json);
        setLoading(false);
      });
    return () => {
      controller.abort();
    };
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }


  function handleclick(image) {
    if (quantity > 0) {
      image.quantity = Number( quantity);
      ordereditem(image);
    }
    else{
      alert("Can't use invalid values")
      
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
