import "../assets/cart.css";
import Bill from "./Bill";
export default function Cart({ delitemfunc, itemsarray }) {
  function handledelete(id) {
    delitemfunc(id);
  }

  if (itemsarray.length == 0) {
    return <h1> No Items in Cart </h1>;
  }
  return (
    <>

    <div className="cartmainstructure">    
      <table className="tabledata">
        <thead >
          <tr className="headers">
            <th >Image</th>
            <th >Category</th>
            <th>Quantity</th>
            <th>Remove</th>
          </tr>
        </thead>

        {itemsarray.map((item) => (
          <tr className="rows">
            <td>
              <img className="itemimage photos" src={item.image} alt="" />
            </td>
            <td>
              <p className="category">{item.category}</p>
            </td>
            <td>
              <p>{item.quantity}</p>
            </td>
            <td>
              <button onClick={() => handledelete(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
      <Bill></Bill>
      </div>

    </>
  );
}
