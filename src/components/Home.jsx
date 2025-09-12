import About from "../pages/About";
import Resume from "../pages/Resume";
import Portfolio from "../pages/Portfolio";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Navbar from "../components/Navbar";
import '../style/home.css';

export default function Home({ activeTab, setActiveTab }) {
  
  return (
    <div className="home container-fluid mx-4 pb-4">
      <div className="navbar-home-container">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      {activeTab === "about" && <About />}
      {activeTab === "resume" && <Resume />}
      {activeTab === "portfolio" && <Portfolio />}
      {activeTab === "blog" && <Blog />}
      {activeTab === "contact" && <Contact />}
    </div>
  );
}