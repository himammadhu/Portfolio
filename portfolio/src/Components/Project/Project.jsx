import React from 'react';
import './project.scss'

const Project = () => {
    return (
        <div className='project-container'>
            <h1 className='title1'>PROJECTS</h1>
            <div className="first">
                <h1 className='clg'>COLLEGE CORNER</h1>
                <p className='h'>Technology Used - MERN ( MongoDB,Express, React js, Node js) </p>
                <div className='adj'>
                    <p className='desp'>
                        "College Corner is a dynamic platform crafted with MERN technology, designed to bridge the gap between colleges and students. Offering a centralized hub for colleges to effortlessly share upcoming programs and events, it fosters seamless communication and engagement among students. With integrated chat functionality, users within the same college community can connect and collaborate effortlessly. College Corner redefines the collegiate experience, empowering students to stay informed, connected, and involved."</p>
                    <img src='https://www.instantcheckmate.com/crimewire/content/images/posts/October2019/6CvQGUCiNS1mQ6OvLJaO.jpg'
                        alt='' />
                </div>
            </div>

            <div className="sec">
                <h1 className="clg2">ONLINE VOTING SYSTEM </h1>
                <p className='h2'>Technology Used - PHP And MySQL </p>
                <div className="adj2">

                    <img className='img2' src=' https://thumbs.dreamstime.com/b/online-voting-chalk-white-icon-black-background-electronic-polls-election-system-e-voting-balloting-participation-democratic-200992005.jpg'
                        alt='' />

                    <p className='desp2'>
                        "Introducing an innovative Online Voting System developed with PHP and MySQL, where voters can seamlessly participate in elections from the comfort of their devices. With secure login credentials, voters authenticate themselves using unique voter IDs and passwords, ensuring the integrity of the electoral process. Admin privileges allow for efficient voter registration, enabling administrators to manage and register voters with ease. Revolutionizing the democratic process, this project fosters accessibility and transparency in elections, empowering individuals to exercise their right to vote conveniently and securely."

                    </p>
                </div>

            </div>

            <div className="third">
                <h1 className="clg3">PNEUMONIA DETECTION </h1>
                <p className='h3'>Technology Used -Machine Learning and Deep Learning  </p>
                <div className="adj3">
                    <p className='desp3'>
                        The Pneumonia Detection project merges machine learning and PyQt5 to create a user-friendly tool for diagnosing pneumonia from X-ray images. Its streamlined interface allows medical professionals to upload images and receive instant predictions, enhancing diagnostic efficiency. Leveraging advanced algorithms and intuitive design, the project promises improved accuracy and faster treatment initiation, leading to better patient outcomes. Through interdisciplinary collaboration and innovative technology, the Pneumonia Detection project sets a new standard for medical diagnostics, paving the way for more accessible and efficient healthcare solutions.
                    </p>
                    <img className='img3' src=' https://th.bing.com/th/id/OIP.klCT2jGeo-PSB9uYrnUurwAAAA?rs=1&pid=ImgDetMain'
                        alt='' />


                </div>

            </div>
        </div>
    )
}

export default Project
