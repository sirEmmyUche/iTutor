import React from 'react';
import './App.css';

function WhyChooseUs () {
return (
    <section>
        <div className='why-choose-us'>
            <div><img src='images/iTutors2.png' alt='a boy with a laptop'/></div>
            <div className='why-choose-us-description'>
                <h6>
                Learn a Skill. <br/>
                Learn a Subject.<br/>
                Become Smarter!<br/>
                </h6>
                <p>iTutors is an online education platform <br/>
                    that delivers live virtual classes for students in subject areas and
                    different skill sets such as <br/>
                    digital marketing,GIS & geospatial analytics, user research & design, and data analytics.</p>
                    <button>Book a Tutor</button>
            </div>
        </div>
        <h3>Why Choose Us?</h3>
        <div className='why-chooseUs-vector'>
            <div>
                <img src='images/vector1.svg' alt='logo'/>
                <h4>Personalized Curriculum</h4>
            </div>
            <div>
                <img src='images/vector2.svg' alt='logo'/>
                <h4>One-On-One/Group Learning Options Available</h4>
            </div>
            <div>
                <img src='images/vector3.svg' alt='logo'/>
                <h4>Learn from Experts</h4>
            </div>
            <div>
                <img src='images/vector4.svg' alt='logo'/>
                <h4>Access Case Studies and Projects</h4>
            </div>
            <div>
                <img src='images/vector5.svg' alt='logo'/>
                <h4>24 Hour Assignment/Exam Prep Support</h4>
            </div>
            <div>
                <img src='images/vector6.svg' alt='logo'/>
                <h4>Dynamic Learning Communities</h4>
            </div>
        </div>
    </section>
);
}

export default WhyChooseUs;