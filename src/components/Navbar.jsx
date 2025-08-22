import '../style/navbar.css'

export default function Navbar({ activeTab, setActiveTab }) {
  const Tab = (key, label) => (
    <li key={key} className="navbar-item">
      <button
        type="button"
        className={`navbar-link ${activeTab === key ? "active" : ""}`}
        onClick={() => setActiveTab(key)}
      >
        {label}
      </button>
    </li>
  );

  return (
    <header className="navbar">
      <div className="navbar-container">
        <ul className="navbar-list ms-auto">
          {Tab("about", "About")}
          {Tab("resume", "Resume")}
          {Tab("portfolio", "Portfolio")}
          {Tab("blog", "Blog")}
          {Tab("contact", "Contact")}
        </ul>
      </div>
    </header>
  );
}
