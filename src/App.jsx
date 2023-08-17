import "./assets/css/style.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/elegant-icons.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/nice-select.css";
import "./index.css";
import DashBoard from "./pages/DashBoard";
import Login from "./pages/Login";
import Shop from "./pages/Shop";
import ProductDetailPage from "./pages/ProductDetailPage";
import BlogDetals from "./components/staticPages/BlogDetals";
import AboutUs from "./components/staticPages/AboutUs";
import Category from "./pages/Category";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import MainProducts from "./components/products/MainProducts";
import EmptyCarts from "./components/EmptyCart/EmptyCarts";
import WishList from "./pages/WishList";
import Page404 from "./pages/404";
import SearchedProduct from "./pages/SearchedProduct";
import ShoppingCart from "./pages/ShoppingCart";
import Protected from "./routes/Protected";
import CheckOut from "./pages/CheckOut";
import Payment from "./pages/Payment";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import { GlobalContext } from "./context/GlobalContext";
import { Route, Routes,} from "react-router-dom";
import CartSlider from "./components/Cart/CartSlider";
const App = () => {
  const { isLogin } = GlobalContext(); 
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<DashBoard  title={"Home"} />} />
        <Route path="/login" element={<Login title={"Login"}/>} />
        <Route path="/shop" element={<Shop title={"Shop"}/>} />
        <Route path="/product-Detail" element={<ProductDetailPage title={"ProductDetailPage"}/>} />
        <Route path="/blog-details" element={<BlogDetals title={"BlogDetals"}/>} />
        <Route path="/about" element={<AboutUs title={"AboutUs"}/>} />
        <Route path="/category" element={<Category title={"Category"}/>} />
        <Route path="/contact" element={<Contact title={"Contact"} />} />
        <Route path="/register" element={<Register title={"Register"}/>} />
        <Route path="products" element={<MainProducts title={"MainProducts"}/>} />
        <Route path="/empty-cart" element={<EmptyCarts title={"EmptyCarts"}/>} />
        <Route path="/wishList" element={<WishList title={"WishList"}/>} />
        <Route path="/*" element={<Page404 title={"Page404"}/>} />
        <Route path="/cartSlider" element={<CartSlider title={"Page404"}/>} />
        <Route path="/searchedProduct" element={<SearchedProduct title={"SearchedProduct"}/>} />
        <Route path="/shopping-cart" element={ <Protected isLogin={isLogin}>  <ShoppingCart title={"ShoppingCart"}/></Protected>} />
        <Route path="/checkout" element={ <Protected isLogin={isLogin}><CheckOut title={"CheckOut"}/></Protected>} />
        <Route path="/payment" element={<Protected isLogin={isLogin}><Payment title={"Payment"}/></Protected>} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
