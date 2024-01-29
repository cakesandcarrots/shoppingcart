import './cart.css'


export default function Cart({ delitemfunc, itemsarray }) {
  console.log(itemsarray);

  function handledelete(id) {
    delitemfunc(id);
  }
  return (
    <>
      <table className="tabledata">
        <thead>
          <tr className='headers'>
            <th>Image</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Remove</th>
          </tr>
        </thead>

        {itemsarray.map((item) => (
          <tr className='rows'>
            <td>
              <img className="itemimage" src={item.image} alt="" />
            </td>
            <td>
              <p>{item.category}</p>
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
    </>
  );
}
