
import { Route, Routes } from "react-router-dom";
import "./index.css"
import Home from "./pages/home";
import Navbar from "./layout/navbar";
import About from "./pages/about";
import Footer from "./layout/footer";
import Contact from "./pages/contact";
import Signup from "./pages/signup";
import Blog from "./pages/blog";
import DetShop from "./pages/detailsarticle";
import { MyProvider } from "./context";
import Register from "./pages/register";
import ShopPage from "./pages/shop";
function App() {
  return (
    <>
    <MyProvider>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/shopPage" element={<ShopPage />} />    
        <Route path="/register" element={<Register />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/detShop/:id" element={<DetShop />} />
      </Routes>
      <Footer/>
      </MyProvider>
    </>
  );
}

export default App;




