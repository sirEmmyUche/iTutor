import './App.css';

function Nav () {
    return (
        <div>
            <nav>
            <div className='logo'>iTutor</div>
            <ul className='nav-ul'>
                <li>Home</li>
                <li>About Us</li>
                <li>Courses</li>
                <li>Blog</li>
                <li>Contact Us</li>
                <li className='nav-get-started-btn'><button>Get Started</button></li>
            </ul>
            </nav>
        <header>
            <div className='get-personal-tutor'>
                <h1>
                    Get Personalized Tutors <br/> 
                    at your Convenience
                </h1>
                <p>
                    Seasoned subject and skill tutors<br/> 
                    available to help you achieve your goals
                </p>
                <button> Get Started</button>
            </div>
            
            <div className='header-img'><img src='images/iTutors.png' alt='an avi'/></div>
            <div className='designed-to-meet-needs'>
                <h5>Designed to meet the needs of</h5>
                <ul>
                <li>Students</li>
                <li>Parents</li>
                <li>Professionals</li>
                </ul>
            </div>
        </header> 
    </div> 
    );
}

export default Nav;