import './App.css';

function Nav () {
    return (
        <div>
            <nav className='nav'>
            <div>iTutor</div>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Courses</li>
                <li>Blog</li>
                <li>Contact Us</li>
                <li><button>Get Started</button></li>
            </ul>
            </nav>
        <header>
            <div>
                <div>
                    Get Personalized Tutors <br/> 
                    at your Convenience
                </div>
                <div>
                    Seasoned subject and skill tutors<br/> 
                    available to help you achieve your goals
                </div>
                <button> Get Started</button>
            </div>
            
            <div><img src='images/iTutors.png' alt='an avi'/></div>
            <div>
                <h5>Designed to meet the needs of</h5>
                <li>students</li>
                <li>parents</li>
                <li>Professionals</li>
            </div>
        </header> 
    </div> 
    );
}

export default Nav;