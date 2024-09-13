
import { Route, Routes } from "react-router-dom";
import "./index.css"
import Home from "./pages/home";
import Navbar from "./layout/navbar";
import About from "./pages/about";
import Footer from "./layout/footer";
import Contact from "./pages/contact";
import Signup from "./pages/signup";
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;




