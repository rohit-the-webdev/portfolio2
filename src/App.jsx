import { Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./components/Home";
import { useState } from "react";

export default function App() {
  const [activeTab, setActiveTab] = useState("about");
  return (
    <div className="app d-flex justify-content-around">
      <Sidebar/>
      <div className="content">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        <Home activeTab={activeTab} />
      </div>
    </div>
  );
}
