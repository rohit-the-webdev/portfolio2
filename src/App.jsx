import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { useState } from "react";

export default function App() {
  const [activeTab, setActiveTab] = useState("about");
  return (
    <div className="app d-flex justify-content-evenly">
      <Sidebar/>
      <div className="content">
        {/* <Navbar activeTab={activeTab} setActiveTab={setActiveTab} /> */}
        <Home activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}
