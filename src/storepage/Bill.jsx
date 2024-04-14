import "../assets/bill.css";
import { useEffect, useState } from "react";
const Bill = ({ cost, clearitems }) => {
  const [value, setValue] = useState(Math.round(cost));
  const [checkoutComplete, setCheckoutComplete] = useState(false)

  useEffect(()=>{
    setValue(Math.round(cost))
  },[cost])


  
  useEffect(()=>{
    if(checkoutComplete==true){
      clearitems()
    }
  },[checkoutComplete])



  let discount = Math.round((8 / 100) * value);
  let taxes = Math.round((14 / 100) * value);
  let check = 1;

  

  const handleclick = () => {
    if (check == 1 && cost != 0) {
      alert("Thanks for Shopping");
      setCheckoutComplete(true)
    } else {
      if (check == 1) alert("Buy an item for payment checkout");
      check = 0;
    }
  };
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
