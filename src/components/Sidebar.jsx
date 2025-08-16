import { useState } from "react";
import '../style/Sidebar.css';
import { IoChevronDown, IoCallOutline, IoCalendar,  IoLocation, IoMailOutline } from "react-icons/io5";
import profile from '../assets/react.svg';

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <aside className={`sidebar ${open ? "active" : ""} mt-5 p-2 bg-dark text-white`}>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={profile} alt="Rohit Kale" width="80" />
        </figure>
        <div className="info-content">
          <h1 className="name">Rohit Kale</h1>
          <p className="title">Web Developer</p>
        </div>
        <button className="info_more-btn" onClick={() => setOpen(!open)}>
          <span>Show Contacts</span>
          {/* <IoChevronDown className="icons"/> */}
        </button>
      </div>

      {open && (
        <div className="sidebar-info_more">
          <ul class="list-unstyled">
            <li><IoMailOutline className="icons"/> rohitkale842@gmai.com</li>
            <li><IoCallOutline className="icons"/> 1234567890</li>
            <li><IoCalendar className="icons"/> 11-01-2002</li>
            <li><IoLocation className="icons"/> Baramati, Maharashtra, India</li>
          </ul>
        </div>
      )}
    </aside>
  );
}
