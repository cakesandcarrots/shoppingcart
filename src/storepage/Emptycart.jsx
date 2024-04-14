import "../assets/cart.css"
import Bill from "./Bill";
const Emptycart = ({clearitems})=>{
    return (
        <>
          <div className="emptybill">
            <h1> No Items in Cart </h1>
              <Bill clearitems = {clearitems} cost={0}></Bill>
          </div>
        </>
    )
}
export default Emptycart