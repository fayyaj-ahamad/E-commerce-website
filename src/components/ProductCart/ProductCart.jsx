import { add_To_Cart } from "../../redux/cartSlice/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {ToastContainer,toast, Bounce} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
const ProductCart = ({ data }) => {
  const dispatch = useDispatch();

  const addToCart = (item) => {
    dispatch(add_To_Cart(item));
    toast.success("✌Item Addedd ...  ",{
      position:"top-right",
      autoClose:1500,
      hideProgressBar:false,
      closeOnClick:true,
      pauseOnHover:true,
      draggable:true,
      progress:undefined,
      theme:"dark",
      transition:Bounce,
    });
   
  };


  return (
    <>
    <ToastContainer />
      <div className="cart">
        {data.map((item, index) => {
          return (
            <div to={"/cartpage"} className="product_cart" key={index}>
              <Link to={`/singleprodutpage/${item.id} `}>
                <div className="product_img">
                  <img src={item.image} alt="Product Image" />
                </div>
              </Link>
              <div className="description">
                <p style={{fontSize:"0.9em"}}>{item.description}</p>
              </div>
              <div className="price">
                <div>
                  <h5>₹ - {item.price}</h5>
                </div>
              </div>
              <div className="addtocart">
                <button onClick={() => addToCart(item)}>Add To Cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ProductCart;
