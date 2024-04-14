import "../assets/bill.css";
const Bill = ({ cost }) => {
  console.log(cost);
  let value = Math.round(cost);
  let discount = Math.round((8 / 100) * value);
  let taxes = Math.round((14 / 100) * value);
const handleclick = ()=>{
alert("Thanks for shopping")
}
  return (
    <>
      <div className="billcontainer">
        <div className="bill">Bill</div>
        <div className="calculations">
          <div className="data">Subtotal: {value}</div>
          <div className="data">Discount(8%): {discount}</div>
          <div className="data">Taxes(14%): {taxes}</div>
        </div>

        <div className="grandtotal">
          GRAND TOTAL : {value - discount + taxes}
        </div>

        <button onClick={handleclick} className="checkout">
            CHECKOUT
        </button>
      </div>
    </>
  );
};

export default Bill;
