import "../assets/cart.css"
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Bill from "./Bill";
const options = {
    position: positions.TOP_CENTER,
    timeout: 5000,
    offset: "30px",
    transition: transitions.SCALE,
  };
const Emptycart = ({clearitems})=>{
    return (
        <>
          <div className="emptybill">
            <h1> No Items in Cart </h1>
            <AlertProvider  template={AlertTemplate} {...options}>
              <Bill clearitems = {clearitems} cost={0}></Bill>
            </AlertProvider>
          </div>
        </>
    )
}
export default Emptycart