import About from "../pages/About";
import Resume from "../pages/Resume";
import Portfolio from "../pages/Portfolio";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";

export default function Home({ activeTab }) {
  return (
    <div className="home">
      {activeTab === "about" && <About />}
      {activeTab === "resume" && <Resume />}
      {activeTab === "portfolio" && <Portfolio />}
      {activeTab === "blog" && <Blog />}
      {activeTab === "contact" && <Contact />}
    </div>
  );
}