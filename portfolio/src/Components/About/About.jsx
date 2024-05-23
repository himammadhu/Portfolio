import React from 'react';
import './about.scss';
import headshotImage from './HeadshotPro Avatar 2024-05-12T15-16-29-453Z.png';

const About = () => {
  return (

    <div className='abt-container'>
      <div className="lft">
        <img className='img' src={headshotImage} alt='Headshot' />
      </div>
      <div className="rgt">
        <h1>Hey there, I'm Hima Madhu!</h1>
        <p>Stepping into the realm of technology with a Bachelor's degree in Computer Applications, specializing in Artificial Intelligence from Yeldo Mar Baselious College, Kothamangalam, I've honed a skill set primed for the demands of the digital landscape. Currently based in Dubai, I'm on a mission to leverage my expertise as a Front-end Developer, specializing in React.js, to create seamless and engaging user experiences.</p>
        <p>With a robust academic background in Computer Applications and a focus on Artificial Intelligence, I bring a blend of analytical prowess and hands-on experience to the table. Proficient in React.js, I specialize in crafting user interfaces that seamlessly merge aesthetics with functionality. Fluent in JavaScript, HTML, and CSS, I wield a versatile toolkit to breathe life into digital concepts. Moreover, my adeptness extends beyond React.js, encompassing a range of frameworks and libraries, enabling me to streamline development processes and optimize performance.</p>
        <h3>Professional Vision</h3>
        <p>As a fresh graduate, my professional vision is fueled by an unwavering commitment to continuous learning and growth. I am dedicated to staying abreast of emerging technologies and industry trends, eager to embrace new challenges and expand my skill set. While I may lack professional experience, my goal remains resolute: to surpass client expectations by delivering innovative solutions that resonate with users and contribute to business success. With a proactive mindset and a passion for excellence, I am poised to embark on a journey of exploration and achievement in the dynamic field of front-end development.</p>
        <h5>Let's Connect:</h5>
        <p>Whether you're seeking a skilled front-end developer to elevate your digital presence or simply looking to network with like-minded professionals, I'm here to collaborate and innovate. Let's connect and explore how we can leverage technology to achieve your goals and aspirations.

        </p>
      </div>
    </div>



  )
}

export default About
