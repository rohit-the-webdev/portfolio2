import { useState } from "react";
import '../style/Sidebar.css';
import { IoCallOutline, IoMailOutline, IoCalendarOutline, IoLocationOutline } from "react-icons/io5";
import profile from '../assets/react.svg';

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <aside className={`sidebar ${open ? "active" : ""} mt-5 p-2 d-flex flex-column justify-content-center align-items-center`}>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={profile} alt="Rohit Kale" width="80" />
        </figure>
        <div className="info-content">
          <h4 className="name">Rohit Kale</h4>
          <h6 className="title">Web Developer</h6>
        </div>
        {/* <button className="info_more-btn" onClick={() => setOpen(!open)}>
          <span>Show Contacts</span>
          <IoChevronDown className="icons"/>
        </button> */}
      </div>
      <hr />
        <div className="sidebar-info_more">
          <ul class="list-unstyled">
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
                <div className="row">Baramati, Maharashtra, India</div>
              </div>
            </li>
          </ul>
        </div>

    </aside>
  );
}
