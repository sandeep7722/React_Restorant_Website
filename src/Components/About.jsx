import React from 'react';
import aboutimage from '../images/about.png';

function About() {
    return (
        <div id='about'>
            <div className='about-text'>
                <h1>UPCOMMING EVENT</h1>
                <p>Greate offer soon.</p>
                <button>Read More</button>
            </div>
            <div className='about-image'>
                <img src={aboutimage} alt=''/>
            </div>
            
        </div>
    )
}

export default About;
