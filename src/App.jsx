
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx"
import Contact from "./pages/Contact.jsx"
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx"
import DetailProduct from "./pages/DetailProduct.jsx";
function App() {
  return (
      <>
        <Router  >
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/detail-product" element={<DetailProduct/>}></Route>
            </Routes>
            <Footer/>
        </Router>
      </>
  )
}

export default App
