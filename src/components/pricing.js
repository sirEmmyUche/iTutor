
import './App.css';

function Pricing () {
    return (
        <div className='pricing-component'>
            <div className='our-pricing-plans'>
                <h3> Our<br/> Pricing <br/> Plans</h3>
                <p>Explore through our flexible and
                affordable pricing<br/> plans that you can choose from.</p>
                <button>Book a Tutor</button>
            </div>
            
            <div className='pricing-amount'>
                <h5>Standard</h5>
                <div>$50 <br/><span className='date'>/Monthly</span></div>
                <p>Get full access to a personalized
                    tutor for one month in a particular subject area or skill.</p>
                <ul>
                    <li>Full Access to Tutor </li>
                    <li>Access to Study Materials</li>
                    <li>24/7 Supports</li>
                    <li>Jobs Opportunity</li>
                    <li>Exam Preparation Support</li>
                </ul>
            </div>
            <div className='pricing-amount'>
                <h5>Premium</h5>
                <div>$550 <br/><span className='date'>/Annually</span></div>
                <p>Get full access to a personalized 
                    tutor for one year in a particular subject area or skill.</p>
                <ul>
                    <li>Full Access to Tutor </li>
                    <li>Access to Study Materials</li>
                    <li>24/7 Supports</li>
                    <li>Jobs Opportunity</li>
                    <li>Exam Preparation Support</li>
                </ul>
                <div className='pricing-golden-mark'></div>
            </div>
        </div>
    );
}

export default Pricing; 