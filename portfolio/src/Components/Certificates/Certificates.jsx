import React from 'react';
import './certificates.scss';

const Certificates = () => {
    return (
        <div className='certificates'>
            <div className="ct">
                <h1>CERTIFICATES</h1>
            </div>
            <div className="content">
                <div className="certificate-section ai">
                    <p className='section-title'>Certificate</p>
                    <h3 className='certificate-title'>AI Certification</h3>
                    <p className='issuer'>Unique World Robotics, Accredited by STEM.Org</p>
                    <p className='date'>March, 2024</p>
                </div>
                <div className="certificate-section workshop">
                    <p className='section-title'>Professional Development</p>
                    <h3 className='certificate-title'>Five-Day Student Development Workshop on Deep Learning, Machine Learning, Artificial Neural Networks, and AI</h3>
                    <p className='issuer'>Yeldo Mar Baselios College, Kothamangalam</p>
                    <p className='date'>May, 2023</p>
                </div>
                <div className="certificate-section iedc">
                    <p className='section-title'>Experience</p>
                    <h3 className='certificate-title'>Chief Community Officer, Executive Committee Member</h3>
                    <p className='issuer'>Innovation and Entrepreneurship Development Cell (IEDC)</p>
                    <p className='date'>March 2023 - April 2024</p>
                </div>
            </div>
        </div>
    );
}

export default Certificates;
