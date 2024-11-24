import React, { useState, useEffect } from 'react';
import './Nav.css';
import { useLocation } from 'react-router-dom';

function Nav() {
    const location = useLocation();

    const [isHamburgerOpen, setHamburgerOpen] = useState(false);
    const toggleHamburger = () => {
        setHamburgerOpen(!isHamburgerOpen);
    };

    const [lessons, setLessons] = useState([]);

    // Fetch the lessons data depending on the URL
    useEffect(() => {
        const fetchLessons = async () => {
            if (location.pathname.includes('/js')) {
                // Load data from js-array.json if in /js path
                const data = await import('../js-array.json');
                setLessons(data.default);
            } else {
                // Load data from react-array.json for other paths
                const data = await import('../react-array.json');
                setLessons(data.default);
            }
        };

        fetchLessons();
    }, [location.pathname]);  // Re-run the effect when the path changes

    return (
        <>
            <div className={isHamburgerOpen ? 'hamburger active' : 'hamburger'} onClick={toggleHamburger}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>
            <div className={isHamburgerOpen ? 'nav-tab open' : 'nav-tab'}>
                <div className='page-nav'>
                    <a href='/react'>React</a>
                    <a href='/js'>JavaScript</a>
                </div>
                {lessons.map((lesson) => (
                    <a className='nav-item' href={`#${lesson.title}`} key={lesson.id}>
                        <p>{lesson.title}</p>
                    </a>
                ))}
            </div>
        </>
    )
}

export default Nav;
