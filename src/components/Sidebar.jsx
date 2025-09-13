import { useState } from "react";
import '../style/Sidebar.css';
import { IoCallOutline, IoMailOutline, IoCalendarOutline, IoLocationOutline, IoLogoInstagram, IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin } from "react-icons/io5";
import profile from '../assets/images/my-avatar.png';

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <aside className={`sidebar ${open ? "active" : ""} d-flex flex-column justify-content-center align-items-center ms-3`}>
      <div className="sidebar-info">
        <figure className="avatar-box d-flex flex-column justify-content-center align-items-center">
          <img src={profile} className="profile" alt="Rohit Kale" />
        </figure>
        <div className="info-content d-flex flex-column justify-content-center align-items-center ">
          <h4 className="name">Rohit Kale</h4>
          <h6 className="title">Web Developer</h6>
        </div>
      </div>
      <hr />
        <div className="sidebar-info_more">
          <ul className="list-unstyled">
            <li className="my-4 d-flex justify-content-start">
              <div className="icon-box">
                <IoMailOutline className="icon"/>
              </div>
              <div className="items ms-4 d-flex flex-column">
                <div className="row">email</div>
                <div className="row">rohitkale842@gmail.com</div>
              </div>
            </li>
            <li className="my-4 d-flex justify-content-start">
              <div className="icon-box">
                <IoCallOutline className="icon"/>
              </div>
              <div className="items ms-4 d-flex flex-column">
                <div className="row">Phone</div>
                <div className="row">123456789</div>
              </div>
            </li>
            <li className="my-4 d-flex justify-content-start">
              <div className="icon-box">
                <IoCalendarOutline className="icon"/>
              </div>
              <div className="items ms-4 d-flex flex-column">
                <div className="row">Birhtdate</div>
                <div className="row">11/01/2002</div>
              </div>
            </li>
            <li className="my-4 d-flex justify-content-start">
              <div className="icon-box">
                <IoLocationOutline className="icon"/>
              </div>
              <div className="items ms-4 d-flex flex-column">
                <div className="row">Location</div>
                <div className="row">Baramati, Maharashtra, <br /> INDIA</div>
              </div>
            </li>
          </ul>
        </div>
        <ul className="social-list">

          <li className="social-item">
            <a href="#" className="social-link">
              <IoLogoFacebook/>
            </a>
          </li>

          <li className="social-item">
            <a href="#" className="social-link">
              <IoLogoInstagram/>
            </a>
          </li>

          <li className="social-item">
            <a href="#" className="social-link">
              <IoLogoTwitter/>
            </a>
          </li>

          <li className="social-item">
            <a href="#" className="social-link">
              <IoLogoLinkedin/>
            </a>
          </li>

        </ul>

    </aside>
  );
}
