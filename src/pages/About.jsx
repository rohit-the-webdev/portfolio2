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

      <h4 className="headline ms-3">What I'm Doing</h4>
      <div className="container mt-3">
  <div className="row justify-content-center">
    <div className="col-md-6 mb-3 d-flex justify-content-center">
      <div className="card d-flex flex-row align-items-center p-3" style={{ maxWidth: "400px", width: "100%" }}>
        <img
          src="src/assets/images/icon-design.svg"
          alt="icon"
          className="icon about-icons"
        />
        <div className="card-body p-0">
          <h5 className="card-title">Web Design</h5>
          <p className="card-text mb-0">
            The most modern and high-quality design made at a professional
            level.
          </p>
        </div>
      </div>
    </div>

    <div className="col-md-6 mb-3 d-flex justify-content-center">
      <div className="card d-flex flex-row align-items-center p-3" style={{ maxWidth: "400px", width: "100%" }}>
        <img
          src="src/assets/images/icon-dev.svg"
          alt="icon"
          className="icon about-icons"
        />
        <div className="card-body p-0">
          <h5 className="card-title">Web development</h5>
          <p className="card-text mb-0">
            High-quality development of sites at the professional level.
          </p>
        </div>
      </div>
    </div>

    <div className="col-md-6 mb-3 d-flex justify-content-center">
      <div className="card d-flex flex-row align-items-center p-3" style={{ maxWidth: "400px", width: "100%" }}>
        <img
          src="src/assets/images/icon-app.svg"
          alt="icon"
          className="icon about-icons"
        />
        <div className="card-body p-0">
          <h5 className="card-title">Mobile apps</h5>
          <p className="card-text mb-0">
            Professional development of applications for iOS and Android.
          </p>
        </div>
      </div>
    </div>

    <div className="col-md-6 mb-3 d-flex justify-content-center">
      <div className="card d-flex flex-row align-items-center p-3" style={{ maxWidth: "400px", width: "100%" }}>
        <img
          src="src/assets/images/icon-photo.svg"
          alt="icon"
          className="icon about-icons"
        />
        <div className="card-body p-0">
          <h5 className="card-title">Photography</h5>
          <p className="card-text mb-0">
            I make high-quality photos of any category at a professional level.
          </p>
        </div>
      </div>
    </div>

  </div>
      </div>
    </article>
  );
}