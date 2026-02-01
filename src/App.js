import {BrowserRouter,Routes,Route, useLocation} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Search from "./pages/Search";
import { useEffect } from "react";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({top: 0, behavior: "smooth"});
  },[location.pathname]);

  return null;
}


function App() {
  return (
    <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:name" element={<Category />} />
            <Route path="/search" element={<Search />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;