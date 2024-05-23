import React from 'react';
import './home.scss';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Project from '../Project/Project';
import Certificates from '../Certificates/Certificates';
import { Link } from 'react-router-dom';
import Skills from '../Skills/Skills';

const Home = () => {
  return (
    <div>
        <div className="container">
            <div className="home-left">
                <p className='name'>Hima Madhu</p>
                <p className='title'>Front-end Developer</p>
                <p className='desp'>Designing the web's future, pixel by pixel, with passion and precision.</p>
            </div>
            <div className='contact'>
                <Link to="/Contact" style={{ textDecoration: 'none' }}>
                <p>Contact me</p>
                </Link>
            </div>
            <div className="home-right">
                <img src='https://th.bing.com/th/id/OIP.OUQADDnH9p50tWDgHX1yPgHaHa?w=736&h=736&rs=1&pid=ImgDetMain'
                alt=''/>

            </div>
        </div>
        
        <About/>
        <Skills/>
        <Project/>
        <Certificates/>
        <Contact/>
      
    </div>
  )
}

export default Home
