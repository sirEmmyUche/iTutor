import './App.css';

function Programmes () {
    return (
        <section className='programmes-component'>
            <h2>Our Programmes</h2>
            <div className='programmes-component-card'>
                <div className='programmes-card'>
                    <h4>Certification Trainings</h4>
                    <p>Project Management Professional Scrum Master</p>
                    <div className='golden-mark'></div>
                </div>
                <div className='programmes-card'>
                    <h4>Career Trainings </h4>
                    <p>User Research & Design Digital Marketing Data Analysis GIS & Geospatial Analytics </p>
                </div>
                <div className='programmes-card'>
                    <h4>Subject Trainings</h4>
                    <p>GCSE Subjects A Level Subjects JAMB & WAEC</p>
                </div>
            </div>
        </section>
    );
}

export default Programmes;