import About from "../pages/About";
import Resume from "../pages/Resume";
import Portfolio from "../pages/Portfolio";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Navbar from "../components/Navbar";
import '../style/home.css';

export default function Home({ activeTab, setActiveTab }) {
  
  return (
    <div className="home container-fluid mx-5 pb-4">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "about" && <About />}
      {activeTab === "resume" && <Resume />}
      {activeTab === "portfolio" && <Portfolio />}
      {activeTab === "blog" && <Blog />}
      {activeTab === "contact" && <Contact />}
    </div>
  );
}