import "./category.css";

import catgory1 from "../../assets/image/catgry.png";
import catgory2 from "../../assets/image/catgry2.png";
import catgory3 from "../../assets/image/catgry3.png";
import catgory4 from "../../assets/image/catgry4.png";
import catgory5 from "../../assets/image/catgry5.png";
import catgory6 from "../../assets/image/catgry6.png";
import catgory7 from "../../assets/image/catgry7.png";
import { Link } from "react-router-dom";


const catgory = [
  {
    image: catgory1,
    name: "fashion",
  },
  {
    image: catgory2,
    name: "shirt",
  },
  {
    image: catgory3,
    name: "jacket",
  },
  {
    image: catgory4,
    name: "mobile",
  },
  {
    image: catgory5,
    name: "laptop",
  },
  {
    image: catgory6,
    name: "shoes",
  },
  {
    image: catgory7,
    name: "book",
  },
];

const Catgory = () => {
  return (
    <div className="catgory">
      {catgory.map((items,index) => {
        return (
         <Link to={`/catgorypage/${items.name} `} key={index}>
          <div className="catgory_circle">
            <div className="catgory_img">
              <img src={items.image} alt="Category" />
            </div>
            <div className="catgory_name">
              <span>{items.name}</span>
            </div>
          </div>
         </Link>
        );
      })}
    </div>
  );
};

export default Catgory;
