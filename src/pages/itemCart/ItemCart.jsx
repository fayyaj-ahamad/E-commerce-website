import "./itemcart.css";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  increament,
  decreament,
  remove_cart,
} from "../../redux/cartSlice/cartSlice";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ItemCart = () => {
  const [total, setTotal] = useState(0);
  const allItems = useSelector((state) => state.cart.cart_items);

  const dispatch = useDispatch();

  const increamentItem = (id) => {
    dispatch(increament(id));
  };

  const decreamentItem = (id) => {
    dispatch(decreament(id));
  };

  const removeCart = (id) => {
    dispatch(remove_cart(id));
    toast.success("✌Delete Item  ", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const totalMoney = () => {
    let totalPrice = 0;
    allItems.map((price) => {
      totalPrice = totalPrice + price.price * price.quantity;
      setTotal(totalPrice);
    });
  };

  useEffect(() => {
    totalMoney();
  });
  return (
    <>
      {allItems.length > 0 ? (
        <div className="item">
          <div className="heading">
            <h2>Shoping Cart</h2>
            <h2>{allItems.length}-Items</h2>
          </div>
          <hr />
          <div className="heading_name">
            <h6>product details</h6>
            <h6>Quantity</h6>
            <h6>price</h6>
            <h6>total</h6>
            <h6></h6>
          </div>
          <ToastContainer />

          {allItems.map((items, index) => {
            return (
              <div className="items" key={index}>
                <div className="items_img">
                  <div className="img">
                    <img src={items.image} alt="Items img" />
                    <div className="cart_items_name">
                      <span>{items.description}</span>
                      <p>Mens</p>
                      <button onClick={() => removeCart(items.id)}>
                        Remove
                      </button>
                    </div>
                  </div>

                  <div className="cart_quantity">
                    <button onClick={() => decreamentItem(items.id)}>-</button>
                    <span>{items.quantity}</span>
                    <button onClick={() => increamentItem(items.id)}>+</button>
                  </div>
                  <div className="items_price">
                    <p>{items.price}</p>
                  </div>

                  <div className="total_price">
                    <p>{(items.price * items.quantity).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="total_items_price">
            <h4 style={{ color: "red", fontSize: "1.5em" }}>
              Total-Price :{allItems.length > 0 ? total.toFixed(2) : 0}
            </h4>
          </div>
        </div>
      ) : (
        <div style={{width:"100%",height:"76.7vh"}}>
          <h1
            style={{
              marginTop: "1em",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Missing Cart items? 🤷‍♂️
          </h1>
          <Link
            to={"/"}
            style={{
              marginTop: "2em",
              color: "red",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h3 style={{textDecoration:"underline"}}>👉 Go Back To Shoping 🤞</h3>
          </Link>
        </div>
      )}
    </>
  );
};

export default ItemCart;
