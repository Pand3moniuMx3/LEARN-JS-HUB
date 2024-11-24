import React from 'react';
import './Start.css';
import { Button } from './Button';
import { useLocation } from 'react-router-dom';

function Start() {
    const location = useLocation();

    return (
        <section className='hero-section'>
            <div className='hero'>
                <h1>{location.pathname.includes('/js') ? 'Java Script' : 'React'}</h1>
                <Button buttonStyle="btn--outline" buttonSize="btn--medium" buttonColor="btn--white" dataBtn="Let's go">Let's go</Button>
            </div>
        </section>
    )
}

export default Start;
