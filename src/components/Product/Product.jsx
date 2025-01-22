import "./Product.css";
import data from "../../data";
import ProductCart from "../ProductCart/ProductCart";
const Product = () => {
  return (
    <div className="product">
      <h1>Bestselling Products</h1>
      <ProductCart data={data} />
    </div>
  );
};

export default Product;
