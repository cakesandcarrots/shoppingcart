import { useEffect, useState } from "react";
export default function Storepage() {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity,setQuantity] = useState(0);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProduct(json);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <p>loading...</p>;
  }
function handleclick({}){

}
  return (
    <>
      <ul className="productWrapper">
        {products.map((image) => (
          <li className="perproduct" key={image.id}>
            <img className="cards" src={image.image} alt="" />
            <div className="inputwrapper">
              <input className="inputfield" type="number" min="0" onChange={(e)=>{setQuantity(e.target.value)
              console.log(image.category);
              }} />
              <button className="addtocart" onClick={handleclick}>Add to cart</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
