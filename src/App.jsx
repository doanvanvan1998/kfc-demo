
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx"
import Contact from "./pages/Contact.jsx"
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx"
function App() {
  return (
      <>
        <Router>
            <Header/>
            <Routes>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
            </Routes>
            <Footer/>
        </Router>
      </>
  )
}

export default App
