import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import drone from "../../assets/drone.png";

function Home() {
  const [btnText, setBtnText] = React.useState("Order Now");
  const handleAnimation = () => {
    const cart = document.querySelector(".cart");
    const drone = document.querySelector(".drone");
    cart.classList.add("animate-cart");
    drone.classList.add("active");
    setBtnText("Ordering...");
    setTimeout(() => {
      setBtnText("Order Placed!");
    }, 1000);
    setTimeout(() => {
      setBtnText("Delivering...");
    }, 2000);
    setTimeout(() => {
      setBtnText("Delivered");
      cart.classList.remove("animate-cart");
      drone.classList.remove("active");
    }, 8000);
  };
  return (
    <div className="wrapper">
      <div className="order">
        <img src={drone} className="drone" alt="" />
        <button className="btn main-btn" onClick={handleAnimation}>
          <div className="cart">
            <FaShoppingBasket size={24} />
          </div>
          <span>{btnText}</span>
        </button>
      </div>
    </div>
  );
}

export default Home;
