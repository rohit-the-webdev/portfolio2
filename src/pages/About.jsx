import '../style/about.css';
export default function About() {
  return (
    <article classNameName="about">
      <h2 classNameName="h2 article-title">About Me</h2>
      <p>
       I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
      </p>
      <p>My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>

      <h4 classNameName="headline">What I'm Doing</h4>
      <div className="container mt-4">
  <div className="row">
    <div className="col-md-6">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card 1</h5>
          <p className="card-text">This is card 1.</p>
        </div>
      </div>
    </div>

    <div className="col-md-6">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card 2</h5>
          <p className="card-text">This is card 2.</p>
        </div>
      </div>
    </div>

    <div className="col-md-6 mt-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card 3</h5>
          <p className="card-text">This is card 3.</p>
        </div>
      </div>
    </div>

    <div className="col-md-6 mt-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card 4</h5>
          <p className="card-text">This is card 4.</p>
        </div>
      </div>
    </div>
  </div>
</div>

    </article>
  );
}
