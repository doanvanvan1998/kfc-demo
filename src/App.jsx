
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx"
import Contact from "./pages/Contact.jsx"
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx"
import DetailProduct from "./pages/DetailProduct.jsx";
import Cart from "./pages/Cart.jsx";
import PaymentSuccess from "./pages/PaymentSuccess.jsx";
import Counter from "./pages/Counter.jsx";
function App() {
  return (
      <>
        <Router  >
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/detail-product" element={<DetailProduct/>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>
                <Route path="/payment-success" element={<PaymentSuccess/>}></Route>
                <Route path="/counter" element={<Counter/>}></Route>
            </Routes>
            <Footer/>
        </Router>
      </>
  )
}

export default App
