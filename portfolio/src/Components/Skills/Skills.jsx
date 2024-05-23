import React, { useState } from 'react';
import './skills.scss';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import ComputerIcon from '@mui/icons-material/Computer';
import AndroidIcon from '@mui/icons-material/Android';

const Skills = () => {
    const [expanded, setExpanded] = useState(false);
    const [hoveredSkill, setHoveredSkill] = useState('');

    const handleSkillClick = () => {
        setExpanded(!expanded);
    };

    const handleMouseEnter = (skill) => {
        setHoveredSkill(skill);
    };

    const handleMouseLeave = () => {
        setHoveredSkill('');
    };

    return (
        <div className='skills'>
            <div className="center">
                <div className={`skill-circle ${expanded ? 'expanded' : ''}`} onClick={handleSkillClick}>
                    SKILLS
                    {expanded && (
                        <div className="divisions">
                            <div className="division" onMouseEnter={() => handleMouseEnter('frontend')} onMouseLeave={handleMouseLeave}>
                                <div><ComputerIcon /></div>
                                <div >

                                    <p >Front-end Skills</p>
                                    {hoveredSkill === 'frontend' && (
                                        <div className="hover-fs">
                                            <ComputerIcon />
                                            <h1>Front-end Development Skills</h1>
                                            <ul>
                                                <li>React js</li>
                                                <li>HTML5</li>
                                                <li>CSS3</li>
                                                <li>JavaScript (Including Ajax, Redux)</li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="division" onMouseEnter={() => handleMouseEnter('backend')} onMouseLeave={handleMouseLeave}>
                                <div><BuildCircleIcon /></div>
                                <p>Back-end Skills</p>
                                {hoveredSkill === 'backend' && (
                                    <div className="hover">
                                        <BuildCircleIcon />
                                        <h1>Back-end Development Skills</h1>
                                        <ul>
                                            <li>Node.js</li>
                                            <li>Python</li>
                                            <li>C</li>
                                            <li>Cpp</li>
                                            <li>PHP</li>
                                            <li>Java</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <div className="division" onMouseEnter={() => handleMouseEnter('softskills')} onMouseLeave={handleMouseLeave}>
                                <div><AcUnitIcon /></div>
                                <p className='ss'>Soft Skills</p>
                                {hoveredSkill === 'softskills' && (
                                    <div className="hover-fs">
                                        <AcUnitIcon />
                                        <h1>Soft Skills</h1>
                                        <ul>
                                            <li>Effective Communication</li>
                                            <li>Analytical Thinking</li>
                                            <li>Team Collaboration</li>
                                            <li>Adaptability</li>
                                            <li>Problem-Solving</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <div className="division" onMouseEnter={() => handleMouseEnter('aiothers')} onMouseLeave={handleMouseLeave}>
                                <div><AndroidIcon /></div>
                                <p className='as'>AI & Other Skills</p>
                                {hoveredSkill === 'aiothers' && (
                                    <div className="hover">
                                        <AndroidIcon />
                                        <h1>AI Development Skills</h1>
                                        <ul>
                                            <li>Data Analysis</li>
                                            <li>Python</li>
                                            <li>Machine Learning</li>
                                            <li>Keras</li>
                                            <li>TensorFlow</li>
                                            <li>Pandas</li>

                                        </ul>
                                        <h1>Other Skills</h1>
                                        <ul>
                                            <li>Version control: Git And GitHub</li>
                                            <li>Database Management: MySQL & MongoDB</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Skills;
