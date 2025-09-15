import React from 'react'
import '../style/portfolio.css'
import {IoEyeOutline} from "react-icons/io5";
import project1 from '../assets/images/project-1.jpg'
import project2 from '../assets/images/project-2.png'
import project3 from '../assets/images/project-3.jpg'
import project4 from '../assets/images/project-4.png'
function Portfolio() {
  return (
    <div className='portfolio'>
      <header>
        <h2>Portfolio</h2>
      </header>
        
      <section>
        <ul className='project-list pt-3'>
          <li className='project-item'>
            <a href="#">
            <figure className='project-img'>
              <div className="project-item-icon-box">
                <IoEyeOutline/>
              </div>
              <img src={project1} alt="" loading='lazy' />
            </figure>
            <h6 class="project-title">Finance</h6>
            <p className="project-category">Web development</p>
            </a>
          </li>
          <li className='project-item'>
            <a href="#">
            <figure className='project-img'>
              <div className="project-item-icon-box">
                <IoEyeOutline/>
              </div>
              <img src={project2} alt="" loading='lazy' />
            </figure>
            <h6 class="project-title">Orizon</h6>
            <p className="project-category">Web development</p>
            </a>
          </li>
          <li className='project-item'>
            <a href="#">
            <figure className='project-img'>
              <div className="project-item-icon-box">
                <IoEyeOutline/>
              </div>
              <img src={project3} alt="" loading='lazy' />
            </figure>
            <h6 class="project-title">Fundo</h6>
            <p className="project-category">Web design</p>
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Portfolio
