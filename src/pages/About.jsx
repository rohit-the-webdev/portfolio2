import "../style/about.css";
export default function About() {
  return (
    <article classNameName="about d-flex flex-column justify-content-start">
      <h3 classNameName="h2 article-title">About Me</h3>
      <div className="about-me-text d-flex flex-column justify-content-start">
        <p>
          I'm Creative Director and UI/UX Designer from Sydney, Australia,
          working in web development and print media. I enjoy turning complex
          problems into simple, beautiful and intuitive designs.
        </p>
        <p>
          My job is to build your website so that it is functional and
          user-friendly but at the same time attractive. Moreover, I add
          personal touch to your product and make sure that is eye-catching and
          easy to use. My aim is to bring across your message and identity in
          the most creative way. I created web design for many famous brand
          companies.
        </p>
      </div>

      <h4 className="headline">What I'm Doing</h4>
      <div className="container mt-4">
  <div className="row justify-content-center">
    <div className="col-md-5 mb-3">
      <div
        className="card d-flex flex-row align-items-center p-3"
        style={{ backgroundColor: "#1c1c1c", borderRadius: "12px" }}
      >
        <img
          src="src/assets/images/icon-design.svg"
          alt="icon"
          style={{ width: "40px", height: "50px", marginRight: "15px" }}
        />

        <div className="card-body p-0">
          <h5 className="card-title mb-1" style={{ color: "#fff" }}>
            Web Design
          </h5>
          <p className="card-text mb-0" style={{ color: "#ccc" }}>
            The most modern and high-quality design made at a professional
            level.
          </p>
        </div>
      </div>
    </div>

    <div className="col-md-5 mb-3">
      <div
        className="card d-flex flex-row align-items-center p-3"
        style={{ backgroundColor: "#1c1c1c", borderRadius: "12px" }}
      >
        <img
          src="src/assets/images/icon-design.svg"
          alt="icon"
          style={{ width: "40px", height: "50px", marginRight: "15px" }}
        />

        <div className="card-body p-0">
          <h5 className="card-title mb-1" style={{ color: "#fff" }}>
            Web Design
          </h5>
          <p className="card-text mb-0" style={{ color: "#ccc" }}>
            The most modern and high-quality design made at a professional
            level.
          </p>
        </div>
      </div>
    </div>

    <div className="col-md-5 mb-3">
      <div
        className="card d-flex flex-row align-items-center p-3"
        style={{ backgroundColor: "#1c1c1c", borderRadius: "12px" }}
      >
        <img
          src="src/assets/images/icon-design.svg"
          alt="icon"
          style={{ width: "40px", height: "50px", marginRight: "15px" }}
        />

        <div className="card-body p-0">
          <h5 className="card-title mb-1" style={{ color: "#fff" }}>
            Web Design
          </h5>
          <p className="card-text mb-0" style={{ color: "#ccc" }}>
            The most modern and high-quality design made at a professional
            level.
          </p>
        </div>
      </div>
    </div>

    <div className="col-md-5 mb-3">
      <div
        className="card d-flex flex-row align-items-center p-3"
        style={{ backgroundColor: "#1c1c1c", borderRadius: "12px" }}
      >
        <img
          src="src/assets/images/icon-design.svg"
          alt="icon"
          style={{ width: "40px", height: "50px", marginRight: "15px" }}
        />

        <div className="card-body p-0">
          <h5 className="card-title mb-1" style={{ color: "#fff" }}>
            Web Design
          </h5>
          <p className="card-text mb-0" style={{ color: "#ccc" }}>
            The most modern and high-quality design made at a professional
            level.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

    </article>
  );
}
