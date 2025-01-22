
import "./App.css"
import Product from "./components/Product/Product";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import SingleProductePage from "./pages/singleProduct/SingleProductPage";
import HomePage from "./pages/HomePage/HomePage";
import ItemCart from "./pages/itemCart/ItemCart";
import { Provider } from "react-redux";
import store from "./redux/store";
import Layout from "./components/Layout/Layout";
import CatgoryPage from "./pages/catgorypage/CatgoryPage";

const App = () =>{
  return(
    <>
    <Provider store={store}>
    <Router>
      <Layout>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/singleprodutpage/:id" element={<SingleProductePage/>}/>
      <Route path="/Product" element={<Product/>}/>
      <Route path="/cart" element={<ItemCart/>}/>
      <Route path="catgorypage/:catgoryname" element={<CatgoryPage/>}/>
    </Routes>
    </Layout>
    </Router>
    </Provider>
    </>
  )
}

export default App;