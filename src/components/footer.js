
import './App.css';

function Footer () {
    return (
        <footer>
            <div className='footer-div'>
                <p>iTutors is an online education platform that delivers live virtual classes
                     for students in subject areas and
                     different skill sets such as digital marketing,
                      GIS & geospatial analytics, 
                    user research & design, and data analytics.</p>
                    <p className='copywrite'>All Right Reserved | iTutors 2022</p>
            </div>
            <div>
                <h6>Quicklinks</h6>
                <ul>
                    <li>Home</li>
                    <li>Courses</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div>
                <h6>Contact Us</h6>
                <p>(+234) 815 231 0001 <br/>
                    Info@itutors.com <br/>
                    Lekki, Lagos, Nigeria.</p>
            </div>
        </footer>
    );
}

export default Footer;

