import { Routes, Route, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="app d-flex justify-content-around align-items-center">
        <Sidebar/>
        <div className="tabs">
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/resume" element={<Resume/>}></Route>
            <Route path="/portfolio" element={<Portfolio/>}></Route>
            <Route path="/blog" element={<Blog/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
          </Routes>
          </BrowserRouter>
        </div>
    </div>
  );
}
