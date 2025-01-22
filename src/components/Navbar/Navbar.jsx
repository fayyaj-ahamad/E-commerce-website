import {Link} from "react-router-dom";
import {useSelector} from "react-redux"
import { useState,useEffect } from "react";
import "./Navbar.css"
const Navbar = () =>{
    const [issticky, setIsSticky] = useState(false);
    const items = useSelector((state)=> state.cart.cart_items)

    useEffect(()=>{
        const handleScroll = () =>{
            setIsSticky(window.scrollY>0);
        };
       window.addEventListener("scroll",handleScroll)
    })
    return(
        <div className={`sticky-menu ${issticky}? "sticky" : "" nav`}>
            <nav>
                <div className="logo">
                    
                    <Link to={"/"}>
                    <h3><span>E</span>Bharat Shop</h3></Link>
                </div>
                <div className="menu">
                    <Link to={"/"}><li>Home</li></Link>
                    <Link to={"/product"}><li>Product</li></Link>
                </div>
                <Link to={"/cart"}><div className="cart">
                    
                        
                            <p>cart{items.length > 0 ? <sup>{items.length}</sup>:""}</p>
                        
                    
                </div>
                </Link>
            </nav>
        </div>
    )
}

export default Navbar