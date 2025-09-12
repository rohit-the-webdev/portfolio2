import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";

export default function App() {
  const [activeTab, setActiveTab] = useState("about");
  return (
    <div className="app d-flex justify-content-center align-items-start">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <Home activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}
