import { useEffect, useState } from "react";
export default function Storepage() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProduct(json);
      });
  }, []);

  return (
    <>
        <ul className="productWrapper">
          {products.map((image) => (
            <li key={image.id}>
              <img className="cards" src={image.image} alt="" />
            </li>
          ))}
        </ul>
    </>
  );
}
