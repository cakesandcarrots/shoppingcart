import "../assets/cart.css";
import Bill from "./Bill";
import Emptycart from "./Emptycart";
export default function Cart({ delitemfunc, itemsarray,clearitems }) {
  function handledelete(id) {
    delitemfunc(id);
  }

  if (itemsarray.length == 0) {
    return <Emptycart clearitems={clearitems}/>
    ;
  }
  let count = 0;
  itemsarray.forEach((element) => {
    count = count + element.price * element.quantity;
  });

  return (
    <>
      <div className="cartmainstructure">
        <table className="tabledata">
          <thead>
            <tr className="headers">
              <th className="image">Image</th>
              <th className="category">Category</th>
              <th className="quantity">Quantity</th>
              <th className="remove">Remove</th>
            </tr>
          </thead>
          <tbody>
            {itemsarray.map((item) => (
              <tr key={item.id} className="rows">
                <td>
                  <img className="itemimage photos" src={item.image} alt="" />
                </td>
                <td>
                  <p className="category">{item.category.toUpperCase()}</p>
                </td>
                <td>
                  <p>{item.quantity}</p>
                </td>
                <td>
                  <button onClick={() => handledelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
          <Bill clearitems={clearitems}  cost={count}></Bill>
      </div>
    </>
  );
}
