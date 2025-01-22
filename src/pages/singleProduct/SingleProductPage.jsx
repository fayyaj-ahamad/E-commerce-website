import { useParams } from "react-router-dom";
import { single_Product_Add_To_Cart } from "../../redux/cartSlice/cartSlice";
import data from "../../data";
import "./singleproductpage.css";
import { useDispatch } from "react-redux";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const SingleProductePage = () => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams();

  let singleProduct = data.find((items) => items.id === parseInt(id));

  const singleProductAddToCart = (items) => {
    dispatch(single_Product_Add_To_Cart({ ...items, quantity }));

    toast.success("✌Item Addedd ...  ", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  const singleProduct_Increamnet = () => {
    setQuantity((prev) => prev + 1);
  };

  const singleProduct_Decreament = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };
  return (
    <>
      <ToastContainer />
      <div className="single_item_page">
        <div className="single_item_img">
          <div className="single_img">
            <img src={singleProduct.image} alt="item img" />
          </div>
        </div>
        <div className="single_item_description">
          <div className="single_item">
            <h3>{singleProduct.title}</h3>
          </div>
          <div className="single_item_desc">
            <p>{singleProduct.description}</p>
          </div>
          <div className="single_item_price">
            <h3>RS: {singleProduct.price}</h3>
          </div>
          <div className="single_item_quan">
            <button onClick={singleProduct_Decreament}>-</button>
            <span>{quantity}</span>
            <button onClick={singleProduct_Increamnet}>+</button>
          </div>
          <button onClick={() => singleProductAddToCart(singleProduct)}>
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleProductePage;
