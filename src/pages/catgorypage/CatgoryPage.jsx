import { useParams } from "react-router-dom";
import data from "../../data";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch } from "react-redux";
import { add_To_Cart } from "../../redux/cartSlice/cartSlice";
const CatgoryPage = () => {
  const {catgoryname} = useParams();
  const dispatch = useDispatch();
  const filterd = data.filter((filterItem) => filterItem.category === catgoryname)

  const addToCart = (item) =>{
    dispatch(add_To_Cart(item))
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
  }
  return (
    <>
    <ToastContainer />
      <h1 style={{textAlign:"center", marginTop:"0.5em",backgroundColor:"#e1e1e1"}}>{catgoryname.toUpperCase()}</h1>

          <div className="cart" >
            {
              filterd.map((item,index)=>{
                return(
                  <div className="product_cart" key={index}>
              <div className="product_img">
                <img src={item.image} alt="Product Image" />
              </div>

              <div className="description">
                <p style={{ fontSize: "0.9em" }}>{item.title}</p>
              </div>
              <div className="price">
                <div>
                  <h5>₹ - {999}</h5>
                </div>
              </div>
              <div className="addtocart">
                <button onClick={()=> addToCart(item)}>Add To Cart</button>
              </div>
            </div>
                )
              })
            }
          </div>
      
    </>
  );
};

export default CatgoryPage;
